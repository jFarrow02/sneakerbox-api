/**
 * @file /routers/apiserver/index.js
 * @fileoverview This file aggregates the Express 'Router' objects for the API server and re-exports
 * them as properties of an object.
 */
const express = require('express');
const apiserver = express.Router();
const path = require('path');
const categoryRouter = require(path.resolve(__dirname, 'review_routes', 'router'));
const customerRouter = require(path.resolve(__dirname, 'customers_routes', 'router'));

apiserver.use(categoryRouter);
apiserver.use(customerRouter);

module.exports = apiserver;