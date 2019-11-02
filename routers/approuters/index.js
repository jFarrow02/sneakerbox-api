/**
 * @file /routers/appserver
 */

const express = require('express');
const appserver = express.Router();
const path = require('path');
const customerRouter = require(path.resolve(__dirname, 'customer_routes', 'router'));
const orderRouter = require(path.resolve(__dirname, 'order_routes', 'router'));
const reviewRouter = require(path.resolve(__dirname, 'review_routes', 'router'));


appserver.use(customerRouter);
appserver.use(orderRouter);
appserver.use(reviewRouter);

module.exports = appserver;
