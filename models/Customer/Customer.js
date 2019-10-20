const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB.dbConnectorService;
const collection = DB.collections.customers;

class Customer{
    /***SCHEMA***/
    // _id : ObjectId,
    // username: String,
    // email: String,
    // firstName: String,
    // lastName: String,
    // hashedPassword: String,
    // adresses: [Object],
    // paymentMethods: [Object],
}

module.exports = Customer;