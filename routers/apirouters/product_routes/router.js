/**
 * @file /routers/apiserver/products_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the GET routes of the
 * API server for records in the 'products' collection. It exports the {Router} object on
 * module.exports.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const models = require(path.resolve('/sneakerbox', 'models'));
const Product = models.Product;
const Review = models.Review;
const bodyParser = require('body-parser');
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
router.get('/products/by_category/:category_slug', async(req, res)=>{
   try{
      let catQuery = {slug: req.params.category_slug};
      let category = await router.querySrvc.findOneAndFilter(router.db, categoriesCollection, catQuery, {'_id': 1});
      let prodQuery = {categories: category["_id"]};
      let products = await router.querySrvc.findAll(router.db, productsCollection, prodQuery, null);
      products = products.map((product)=>new Product(product));
      res.status(200).json({data: products});
   }
   catch(e){
      res.status(400).json({err: e.message});
   }
});

/**
 * GET /products/:slug/reviews -->Read all reviews for product identified by 'slug'
 */
router.get('/products/:slug/reviews', async(req, res)=>{
   try{
      let query = {slug: req.params.slug},
         filter = {'_id': 1};
      let productId = await router.querySrvc.findOneAndFilter(router.db, collections.products, query, filter);
      let reviews = await router.querySrvc.findAll(router.db, collections.reviews, {productId: productId});
      reviews = reviews.map((review)=>new Review(review));
      res.status(200).json({data: reviews});
   }
   catch(e){
      res.status(400).json({err: e.message});
   }
});

/**
 * GET /products/:avg_rating -->Read all products with avgRating >= ':avg_rating'
 */
router.get('/products/by_rating/:avg_rating', async(req, res)=>{
   try{
      let avgRating = Number.parseFloat(req.params.avg_rating),
      query = {avgReview: avgRating};
      if(Number.isNaN(avgRating)){
         throw new Error('Invalid query params');
      }
      let productsByRating = await router.querySrvc.findAll(router.db, collections.products, query, null);
      productsByRating = productsByRating.map((product)=>new Product(product));
      res.status(200).json({data: productsByRating});
   }
   catch(e){
      res.status(400).json({err: e.message})
   }
});

/**
 * GET /products/sale   -->Read all products on sale
 */
router.get('/sale', async(req, res)=>{
   try{
      let query = {onSale: true};
      let saleProducts = await router.querySrvc.findAll(router.db, collections.products, query, null);
      saleProducts = saleProducts.map((saleProduct)=>new Product(saleProduct));
      res.status(200).json({data: saleProducts});
   }
   catch(e){
      res.status(500).json({err: e.message});
   }
});

/**
 * GET /products/sale/:category -->Read all products on sale by category === ':category'
 */
router.get('/sale/:category', async(req, res)=>{
   try{
      let query = {onSale: true, mainCategory: req.params.category};
      let saleProducts = await router.querySrvc.findAll(router.db, collections.products, query, null);
      saleProducts = saleProducts.map((saleProduct)=>new Product(saleProduct));
      res.status(200).json({data: saleProducts});
   }
   catch(e){
      res.status(500).json({err: e.message});
   }
});

/**
 * GET /products/price/<num>/<num>  -->Read all products where regular price (or sale price if on sale) is
 * LESS than param 0 and GREATER THAN param 1
 */
router.get(/^\/products\/price\/([0-5])\/([0-5])$/, async(req, res)=>{
   try{
      let lo = req.params['1'],
      hi = req.params['0'];

      if(hi >= lo){
         //Query db for products where regular OR sale price (if on sale) is <= hi && >= lo
         let query = {$or:
            [
               {'priceHistory.reg': {$lte: hi, $gte: lo}},
               {'onSale': true, 'priceHistory.sale': {$lte: hi, $gte: lo}},
            ]
         };
         let productsByRange = await router.querySrvc.findAll(router.db, collections.products, query);
         productsByRange = productsByRange.map((product)=>new Product(product));
         res.status(200).json({data: productsByRange});
      }
      else{
         throw new Error('Invalid query params');
      }
   }
   catch(e){
      res.status(400).json({err: e.message});
   }
});

module.exports = router;