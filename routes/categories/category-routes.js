const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models', 'index'));
const Category = models.Category;
const routeConfig = require(path.resolve('/sneakerbox',  'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});

router.get('/categories/:name', async (req, res)=>{
    let result = await Category.findCategoryByName(req.params.name, client);
    if(!result.err){
        let category = new Category(result);
        res.status(200).json({data: category});
    }
    else{
        res.status(400).json(result);
    }
});

module.exports = router;