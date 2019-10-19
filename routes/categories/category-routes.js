const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models', 'index'));
const Category = models.Category;
const routeConfig = require(path.resolve('/sneakerbox',  'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const connector= require(path.resolve('/sneakerbox', 'services', 'db'));

router.get('/categories/:name', (req, res)=>{
    //console.log(models);
    let result = Category.findCategoryByName('foo', client);
    res.status(200).json({msg: result});
});

module.exports = router;