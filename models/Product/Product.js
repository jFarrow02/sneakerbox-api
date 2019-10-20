/**
 * @fileoverview This file defines a 'Product' model class that represents a record in the 'products' database collection.
   It also defines helper methods on the model for querying database records and/or
   transforming results.
 */


const path = require('path');
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const querySrvc = dbSrvc.dbQueryService;
const collections = dbSrvc.collections;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const dbName = routeConfig.DB_NAME;

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

    constructor(productObj){
        let keys = Object.getOwnPropertyNames(productObj);
        keys.forEach((key)=>{
            if(key !== '_id' && key !== 'priceHistory'){
                this[key] = productObj[key];
            }
        })
    }

    /**
     * @param {MongoClient} client
     * @param {Object} connectorSrvc
     * @param {Object} querySrvc
     */
    static async findAllProducts(client, connectorSrvc, querySrvc){
        await connectorSrvc.connect(client);
        let db = client.db(dbName);
        try{
            let result = await querySrvc.findAll(db, collections.products);
            await connectorSrvc.close(client);
            return result;
        }
        catch(e){
            await connectorSrvc.close(client);
            return {err: e.message};
        }
    }

    /**
     *
     * @param {String} slug
     * @param {MongoClient} client
     * @param {Object} connectorSrvc
     * @param {Object} querySrvc
     */
    static async findProductBySlug(slug, client, connectorSrvc, querySrvc){
        await connectorSrvc.connect(client);
        let db = client.db(dbName);
        try{
            let result = await querySrvc.findOne(db, collections.products, {slug: slug});
            await connectorSrvc.close(client);
            return result;
        }
        catch(e){
            await connectorSrvc.close(client);
            return {err: e.message}
        }
    }
}

module.exports = Product;