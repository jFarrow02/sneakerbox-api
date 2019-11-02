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
const collections = require(path.resolve('/sneakerbox', 'services', 'db', 'collections'));
const productsCollection = collections.products;
const categoriesCollection = collections.categories;

router.use(bodyParser.urlencoded({extended: true}));

//Define product routes

/**
 * GET /products -->Read all products
 */
router.get('/products', async(req, res)=>{
   try{
      let products = await router.querySrvc.findAll(router.db, productsCollection, null, null);
      products = products.map((product)=>new Product(product));
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
      let result = await router.querySrvc.findOneAndFilter(router.db, productsCollection, query, null);
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
   try{
      let catQuery = {slug: req.params.category_slug};
      let catId = await router.querySrvc.findOneAndFilter(router.db, categoriesCollection, catQuery, {'_id': 1});
      let prodQuery = {primaryCategory: catId};
      let products = await router.querySrvc.findAndFilter(router.db, categoriesCollection, prodQuery, null);
      products = products.map((product)=>new Product(product));
      res.status(200).json({data: products});
   }
   catch(e){
      res.status(400).json({err: e.message});
   }
});


module.exports = router;