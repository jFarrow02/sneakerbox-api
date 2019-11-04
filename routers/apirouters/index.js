/**
 * @file /routers/apiserver/index.js
 * @fileoverview This file aggregates the Express {Router} objects for the API server and re-exports
 * them as a single {Router} object, 'apiserver'.
 */

const path = require('path');
const categoryRouter = require(path.resolve(__dirname, 'review_routes', 'router'));
const customerRouter = require(path.resolve(__dirname, 'customers_routes', 'router'));
const orderRouter = require(path.resolve(__dirname, 'order_routes', 'router'));
const productRouter = require(path.resolve(__dirname, 'product_routes', 'router'));
const reviewRouter = require(path.resolve(__dirname, 'review_routes', 'router'));

module.exports = {
    categoryRouter      :       categoryRouter,
    customerRouter      :       customerRouter,
    orderRouter         :       orderRouter,
    productRouter       :       productRouter,
    reviewRouter        :       reviewRouter,
};