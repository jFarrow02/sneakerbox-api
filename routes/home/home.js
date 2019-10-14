const express = require('express');
const path = require('path');
const router = express.Router();
const routeConfig = require(path.resolve('/sneakerbox',  'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const dbConnectorService= require(path.resolve('/sneakerbox', 'services', 'db'));
const connector = dbConnectorService();

router.connector = connector;   //Attach as property of router for easy mocking

router.get('/', async (req, res)=>{
    try{
        await router.connector.connect(client);
        //Close db connection
        await router.connector.close(client);
        res.status(200).json({msg: 'Connection to db was closed'});
        return;
    }
    catch(err){
        // res.status(500).json({err: 'Failed to connect to db'});
        res.status(500).json({err: err.message});
        return;
    }

 });

module.exports = router;