/**
 * @fileoverview This file defines an Express 'Router' object that creates route handler functions
 * for requests related to products. Database connection and query services are attached to the
 * router for easier testing and mocking. The router object is exported on 'module.exports'.
 */
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
    let data = foundProducts.map((product)=> new Product(product));
    if(!data || data.length < 1){
        res.status(400).json({err: 'No products found'});
        return;
    }
    res.status(200).json({data: data});
    return;
});

//GET /product by :slug
router.get('/products/:slug', async (req, res)=>{
    let foundProduct = await Product.findProductBySlug(req.params.slug, client, router.connector, router.query);
    if(foundProduct.err){
        res.status(400).json(foundProduct);
        return;
    }
    res.status(200).json(new Product(foundProduct));
    return;
});

module.exports = router;