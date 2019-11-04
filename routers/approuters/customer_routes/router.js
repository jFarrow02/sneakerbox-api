/**
 * @file /routers/appserver/customer_routes/router
 * @fileoverview This file defines the Express {Router} object containing the customer routes of the
 * APPLICATION server.
 */

 const express = require('express');
 const customerRouter = express.Router();
 const path = require('path');
 const bodyParser = require('body-parser');

 customerRouter.use(bodyParser.urlencoded({extended: true}));

 /**
  * PUT /customers/:username_slug
  * PROTECTED route
  */
 customerRouter.put('/customers/:username_slug', (req, res)=>{
    res.status(203).json({data: `Resource identified by ${req.params.username_slug} has been updated`});
 });

 module.exports = customerRouter;