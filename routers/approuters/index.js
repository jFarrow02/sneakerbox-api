/**
 * @file /routers/appserver
 */

const path = require('path');
const customerRouter = require(path.resolve(__dirname, 'customer_routes', 'router'));
const orderRouter = require(path.resolve(__dirname, 'order_routes', 'router'));
const reviewRouter = require(path.resolve(__dirname, 'review_routes', 'router'));

module.exports = {
    customerRouter      :       customerRouter,
    orderRouter         :       orderRouter,
    reviewRouter        :       reviewRouter,
};
