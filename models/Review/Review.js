const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB.dbConnectorService;
const collection = DB.collections.customers;

class Review{

    /***SCHEMA***/
    // _id: ObjectId,
    // productId: ObjectId,
    // date: Date,
    // title: String,
    // text: String,
    // rating: Number,
    // userId: ObjectId,
    // username: String,
    // upvotes: Number,
    // downvotes: Number,
    // voterIds: [ObjectId],
}

module.exports = Review;