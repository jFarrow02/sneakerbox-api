const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB.dbConnectorService;
const collection = DB.collections.customers;

class Order{

}

module.exports = Order;