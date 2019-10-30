/**
 * @file apiserver/review_routes/router.js
 * @fileoverview This file defines the Express {Router} object containing the review routes of the
 * API server, and exports that object.
 */

const express = require('express');
const reviewRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

reviewRouter.use(bodyParser.urlencoded({extended: true}));

//Define reviewRouter routes
reviewRouter.get('/reviews', (req, res)=>{
    res.status(200).json({data: 'Found review routes OK'});
});

module.exports = reviewRouter;