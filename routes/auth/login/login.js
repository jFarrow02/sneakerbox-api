const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('dotenv').config();
const path = require('path');
const routeConfig = require(path.resolve(__dirname, '../../config', 'routeConfig.js'));

router.use(bodyParser.urlencoded({extended: true}));

router.post('/login', (req, res)=>{
    let collectionName = 'customers';
    const client = new MongoClient(routeConfig.CONNECTION_URL, {useUnifiedTopology: true});
    client.connect((err, client)=>{
        if(err !== null){
            res.status(500).json({err: 'Cannot connect to database'});
            return;
        }
        const db = client.db(routeConfig.DB_NAME);
        db.collection(collectionName).findOne({username: req.body.username}, (err, data)=>{
            if(err !== null){
                res.status(500).json({err: 'Error fetching record'});
                return;
            }
            client.close();
            if(data === null){
                res.status(400).json({msg: 'User not found'});
                return;
            }
            res.status(202).json(data);
            return;
        });
    });
});

module.exports = router;