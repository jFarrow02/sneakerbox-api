const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models', 'index'));
const Category = models.Category;
const routeConfig = require(path.resolve('/sneakerbox',  'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});

console.log('connString:', connString);

router.get('/categories/:name', async (req, res)=>{
    let result = await Category.findCategoryByName(req.params.name, client);
    res.status(200).json({data: result});
});

module.exports = router;