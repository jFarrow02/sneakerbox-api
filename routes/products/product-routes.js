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
const Review = models.Review;
const Customer = models.Customer;
const MongoClient = require('mongodb').MongoClient;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const querySrvc = dbSrvc.dbQueryService;
const bodyParser = require('body-parser');
const checkAuthentication = require(path.resolve('/sneakerbox', 'middleware')).checkAuthentication;
const inputValidatorSrvc = require(path.resolve('/sneakerbox', 'services', 'validators')).inputValidatorSrvc();

router.connector = connectorSrvc;
router.query = querySrvc;
router.use(bodyParser.urlencoded({extended: true}));

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

//PUT a review on /products/:slug/add-review
router.put('/products/:slug/add-review', checkAuthentication, async(req, res)=>{
    /**
     * TODO: 2019-10-26 17:25 EST
     * COMPLETE LOGIC TO SAVE NEW REVIEW TO REVIEWS TABLE AND
     * UPDATE PRODUCT RECORD WITH NEW REVIEW INFORMATION
     */
    /**
     * REQUIRED:
     * rating
     * reviewer: {username},
     * title
     * text
     * date
     * rating
     * productId
     * userId
     */
    let reviewText = req.body.reviewText,
        rating = req.body.rating,
        username = req.get('CurrentUser'),
        title = req.body.title,
        slug = req.params.slug,
        query = {slug: slug}, //FIND PRODUCT THAT MATCHES SLUG
        toValidate =
        [
            {name: 'reviewText', value: reviewText},
            {name: 'rating', value: rating},
            {name: 'username', value: username},
            {name: 'title', value: title},
            {name: 'slug', value: slug},
        ],
        validators = [inputValidatorSrvc.isNullOrUndefined];

    let validationResults = toValidate.map((value)=>{
        value = inputValidatorSrvc.createInputObj(value);
        inputValidatorSrvc.runValidatorFunctions(validators, value);
        return value;
    });

    console.log('VALIDATION RESULTS:', validationResults); //OK

    //Handle if slug not present
    if(!slug){
        res.status(400).json({err: ''});
        return;
    }
    //Get product id and user id for save to new review object
    let userId = await Customer.getUserIdByUsername(username, client, router.connector, router.query);
    let productId = await Product.getProductIdBySlug(slug, client, router.connector, router.query);
    let reviewObj;

    if(userId && productId){
        reviewObj = new Review(
            {
                rating: rating,
                userId: userId,
                username: username,
                text: reviewText,
                title: title,
                date: new Date(Date.now()),
                productId: productId,
            });
    }
        //update = {$push: {reviews: }} //Get the PRODUCT ID

    // let result = await Product.addProductReview(client, router.connector, router.query, query, update);
    // if(result.err){
    //     res.status(400).json(err);
    //     return;
    // }
    //console.log('reviewObj:', reviewObj); //OK
    res.status(203).json({msg: 'Review updated'})
});

module.exports = router;