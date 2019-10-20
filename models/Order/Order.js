const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB.dbConnectorService;
const collection = DB.collections.customers;

class Order{
    /***SCHEMA***/
    // _id: ObjectId,
    // userId: ObjectId,
    // state: String,
    // lineItems: [Product],
    // shippingAddress: [Object],
    // billingAddress: [Object],
    // subtotal: Number,
    // salesTax: Number,
    // shipping: Number,
    // grandTotal: Number,
}

module.exports = Order;