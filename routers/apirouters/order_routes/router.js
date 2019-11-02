/**
 * @file /routers/order_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the review routes of the
 * API server, and exports that object.
 */

 const express = require('express');
 const orderRouter = express.Router();
 const path = require('path');
 const bodyParser = require('body-parser');

 orderRouter.use(bodyParser.urlencoded({extended: true}));

 /**
  * GET /orders/:username_slug
  * PROTECTED route
  */
 orderRouter.get('/orders/:username_slug', (req, res)=>{
    res.status(200).json({data: `Found orders for ${req.params.username_slug} OK`});
 });

 module.exports = orderRouter;