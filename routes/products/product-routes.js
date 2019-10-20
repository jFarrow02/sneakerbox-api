const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models', 'index'));
const Product = models.Product;
const MongoClient = require('mongodb').MongoClient;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const querySrvc = dbSrvc.dbQueryService;

router.connector = connectorSrvc;
router.query = querySrvc;

//GET all /products
router.get('/products', async (req, res)=>{
    let foundProducts = await Product.findAllProducts(client, router.connector, router.query);
    console.log(foundProducts);
    res.status(200).json({msg: 'Found some products'});
});

//GET /product by :slug
router.get('/products/:slug', (req, res)=>{

});

module.exports = router;