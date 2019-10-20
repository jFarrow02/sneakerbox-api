const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB.dbConnectorService;
const collection = DB.collections.customers;

class Product{
    /***SCHEMA***/
    // _id: ObjectId,
    // slug: String,
    // sku: String,
    // modelName: String,
    // desc: String,
    // totalReviews: Number,
    // avgReview: Number,
    // pricing: Object,
    // priceHistory: Object,
    // primaryCategory: ObjectId,
    // categories:[ObjectId],
    // tags: [String],
    // details: Object,
    // onSale: Boolean
}

module.exports = Product;