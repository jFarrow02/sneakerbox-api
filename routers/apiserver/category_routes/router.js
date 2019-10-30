/**
 * @file apiserver/category_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the review routes of the
 * API server, and exports that object.
 */

const express = require('express');
const categoryRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

categoryRouter.use(bodyParser.urlencoded({extended: true}));

//Define categoryRouter routes
categoryRouter.get('/categories', (req, res)=>{
    res.status(200).json({data: 'Found category routes OK'});
});

module.exports = categoryRouter;