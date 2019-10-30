/**
 * @file /routers/apiserver/products_routes/router.js
 * @fileoverview This file defines the Express 'Router' object containing the product routes of the
 * API server.
 */

const express = require('express');
const productRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

productRouter.use(bodyParser.urlencoded({extended: true}));

//Define product routes
productRouter.get('/products', (req, res)=>{
   res.status(200).json({data: 'products route found OK'});
});

module.exports = productRouter;