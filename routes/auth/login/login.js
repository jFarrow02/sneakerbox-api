const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const routeConfig = require(path.resolve(__dirname, '../../config', 'routeConfig.js'));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/login', (req, res)=>{
    let collectionName = 'customers';
    const client = new MongoClient(routeConfig.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    client.connect((err, client)=>{
        //Handle errors connecting to database
        if(err !== null){
            res.status(500).json({err: 'Cannot connect to database'});
        }
        const db = client.db(routeConfig.DB_NAME);
        //Search for user in database
        db.collection(collectionName).findOne({username: req.body.username})
            .then((data)=>{
                if(data === null){
                    res.status(400).json({msg: 'User not found'});
                }
                //Verify user password
                bcrypt.compare(req.body.password, data.password)
                .then((result)=>{
                    //Issue JWT if password match
                
                    //If MATCH:
                    if(result){
                        let header = {algorithm: process.env.ALG, expiresIn: '24h', issuer: 'sneakerbox-authserver'},
                        payload = {username: req.body.username};
                        jwt.sign(payload, secret, header, ((err, token)=>{
                            if(err){
                                res.status(500).json({err: 'Authentication failed'});
                            }
                            //Issue JWT
                            res.status(202).json({token: token, currentUser: req.body.username});
                        }));
                    }
                    //If NO MATCH:
                    else{
                        res.status(404).json({err: 'Invalid username/password combination'});
                    }
                })
                .catch((err)=>{
                   res.status(500).json({err: err})
                })
            })
            .catch((err)=>{
                res.status(500).json({err: 'Error fetching record'});
            })
    });
    client.close();
});

module.exports = router;