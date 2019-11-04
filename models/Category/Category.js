/**
*@fileoverview This file defines a 'Category' model class that represents a record in the 'categories' database collection.
*It also defines helper methods on the model for querying database records and/or
*transforming results.
*/
const path = require('path');
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const collections = dbSrvc.collections;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const dbName = routeConfig.DB_NAME;

class Category {
    /***SCHEMA***/
     //_id: ObjectId
     //slug: String
     //name: String
     //desc: String
     //parentId: ObjectId
     //ancestors: [Object]

    /**
     *
     * @param {Object} categoryObj Object returned from 'categories' collection in db
     */
    constructor(categoryObj){
        let keys = Object.getOwnPropertyNames(categoryObj);
        keys.forEach((key)=>{
            if(key !== '_id'){
                this[key] = categoryObj[key];
            }
        });
    }

    /**
     * @param {MongoClient} client
     * @param {Object} connectorSrvc
     * @param {Object} querySrvc
     */
    static async findAllCategories(client, connectorSrvc, querySrvc){
        await connectorSrvc.connect(client);
        let db = client.db(dbName);
        try{
            let result = await querySrvc.findAll(db, collections.categories);
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
     * @param {String} categoryName
     * @param {MongoClient} client
     * @param {Object} connectorSrvc Service object with db connection helper methods attached
     * @param {Object} querySrvc Service object with db query helper methods attached
     * @return {Object} result Object representing results of db query
     */
    static async findCategoryByName(categoryName, client, connectorSrvc, querySrvc){
        await connectorSrvc.connect(client);
        let db = client.db(dbName);
        try{
            let result = await querySrvc.findOne(db, collections.categories, {name: categoryName});
            await connectorSrvc.close(client);
            return result;
        }
        catch(e){
            await connectorSrvc.close(client);
            return({err: e.message});
        }
    }
}

module.exports = Category;