/**
 * @file apiserver/category_routes/router.js
 * @fileoverview This file defines the Express 'Router' object containing the review routes of the
 * API server.
 */

const express = require('express');
const categoryRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser').urlencoded({extended: true});

//Define categoryRouter routes
categoryRouter.get('/reviews', (req, res)=>{
    res.status(200).json({msg: 'Found review routes OK'});
});

module.exports = categoryRouter;