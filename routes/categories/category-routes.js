/**
 * @fileoverview This file defines an Express 'Router' object that creates route handler functions
 * for requests related to product categories. Database connection and query services are attached to the
 * router for easier testing and mocking. The router object is exported on 'module.exports'.
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models', 'index'));
const Category = models.Category;
const routeConfig = require(path.resolve('/sneakerbox',  'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const querySrvc = dbSrvc.dbQueryService;

router.connector = connectorSrvc;
router.query = querySrvc;

router.get('/categories', async (req, res)=>{
    let foundCategories = await Category.findAllCategories(client, router.connector, router.query);
    let data = foundCategories.map((category)=> new Category(category));
    if(!data || data.length < 1){
        res.status(400).json({err: 'No categories found'});
        return;
    }
    res.status(200).json({data: data});
    return;
});

router.get('/categories/:name', async (req, res)=>{
    let result = await Category.findCategoryByName(req.params.name, client, router.connector, router.query);
    if(!result.err){
        let category = new Category(result);
        res.status(200).json({data: category});
    }
    else{
        res.status(400).json(result);
    }
});

module.exports = router;