/**
 * @file /routers/apiserver/customers_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the customer routes of the
 * API server.
 */

 const express = require('express');
 const customerRouter = express.Router();
 const path = require('path');
 const bodyParser = require('body-parser');

 customerRouter.use(bodyParser.urlencoded({extended: true}));

 //Define customer routes
 customerRouter.get('/customers/:username_slug', (req, res)=>{
    res.status(200).json({data: 'Customers route found OK'});
 });

 module.exports = customerRouter;