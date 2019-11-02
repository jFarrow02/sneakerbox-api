/**
 * @file /routers/apiserver/products_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the product routes of the
 * API server.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models'));
const Product = models.Product;
const Review = models.Review;
const Customer = models.Customer;
const bodyParser = require('body-parser');
const inputValidatorSrvc = require(path.resolve('/sneakerbox', 'services', 'validators')).inputValidatorSrvc();
const collectionName = require(path.resolve('/sneakerbox', 'services', 'db', 'collections')).products;

router.use(bodyParser.urlencoded({extended: true}));

//Define product routes

/**
 * GET /products -->Read all products
 */
router.get('/products', async(req, res)=>{
   try{
      let products = await router.querySrvc.findAll(router.db, collectionName);
      products.map((product)=>new Product(product));
      res.status(200).json({data: products});
   }
   catch(e){
      res.status(500).json({err: e.message});
   }
});

/**
 * GET /products/:slug  -->Read single product identified by 'slug' property
 */
router.get('/products/:slug', async(req, res)=>{
   try{
      let query = {slug: req.params.slug};
      let result = await router.querySrvc.findOneAndFilter(router.db, collectionName, query, null);
      let product = new Product(result);
      res.status(200).json({data: product});
   }
   catch(e){
      res.status(400).json({err: e.message});
   }
});

/**
 * GET /products/:category_slug  -->Read all products for category 'category_slug'
 */
router.get('/products/:category_slug', async(req, res)=>{

});
module.exports = router;