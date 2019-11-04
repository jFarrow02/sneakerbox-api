/**
 * @file /routers/apiserver/order_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the order routes of the
 * APPLICATION server.
 */

const express = require('express');
const orderRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

orderRouter.use(bodyParser.urlencoded({extended: true}));

//Define order routes

/**
 * POST /placeorder/:username_slug
 * PROTECTED route
 */
orderRouter.post('/placeorder/:username_slug', (req, res)=>{
   res.status(203).json({data: 'Order placed OK'});
});

module.exports = orderRouter;