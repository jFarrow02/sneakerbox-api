const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const routeConfig = require(path.resolve(__dirname, '../../config', 'routeConfig.js'));
const saltRounds = 10;
const helpers = require(path.resolve(path.resolve(__dirname, '../../../services/utils', 'helpers.js')));

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/signup', (req, res)=>{

    console.log('Auth', req.get('Authorization'));
    /**
     * TODO: Create user input validation for request params
     */
    let username = req.body.username,
        password = req.body.password;

    bcrypt.hash(password, saltRounds).then((hash)=>{
        
        const client = new MongoClient(routeConfig.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        client.connect((err, client)=>{
            //Handle connection errors to the DB
            if(err !== null){
                helpers.log(err.message);
                res.status(500).json({err: 'Server error occurred'});
                return;
            }
            const db = client.db(routeConfig.DB_NAME);
            //Check for user before saving to DB
            db.collection('customers').findOne({username: username})
                .then((result)=>{
                    if(result !== null){
                        res.status(400).json({err: `User ${username} already exists`});
                        return;
                    }
                    //If user does not already exist, create user
                    db.collection('customers').insertOne({username: username, password: hash})
                    .then(()=>{
                        res.status(202).json({msg: `Created user ${username}`});
                        return;
                    })
                    .catch((err)=>{
                        res.status(500).json({err: 'Foo'});
                        return;
                    })
            });
        });
        client.close();
    })
    .catch((err)=>{
        helpers.log(err.message);
        res.status(500).json({err: 'Error connecting to db'});
        return;
    });
});

module.exports = router;