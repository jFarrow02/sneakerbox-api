/**
 * @file /routers/appserver/review_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the review routes of the
 * APPLICATION server.
 */

const express = require('express');
const reviewRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

reviewRouter.use(bodyParser.urlencoded({extended: true}));

//Define review routes

/**
 * POST /reviews/:product_slug
 * PROTECTED route
 */
reviewRouter.post('/reviews/:product_slug', (req, res)=>{
   res.status(200).json({data: 'reviews route found OK'});
});

module.exports = reviewRouter;