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

/**
 * Attach connector and query services as properties of router
 * for easier mocking in unit tests
 */
router.connector = connectorSrvc;
router.query = querySrvc;

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