const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('dotenv').config();
const DB_URL = process.env.DB_URL;
const DB_PORT = process.env.DB_PORT;

router.use(bodyParser.urlencoded({extended: true}));

router.post('/login', (req, res)=>{
    let dbName = process.env.DB_NAME,
        collectionName = 'customers',
        connectionUrl = `mongodb://${DB_URL}:${DB_PORT}`;
    const client = new MongoClient(connectionUrl, {useUnifiedTopology: true});
    client.connect((err, client)=>{
        if(err !== null){
            res.status(500).json({msg: 'Cannot connect to database'});
        }
        const db = client.db(dbName);
        db.collection(collectionName).findOne({username: 'sneakerManiac123'}, (err, data)=>{
            if(err !== null){
                res.status(500).json({msg: 'Record not found'});
            }
            client.close();
            res.status(202).json(data);
        });
    });
});

module.exports = router;