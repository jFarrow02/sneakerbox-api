const path = require('path');
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const collections = dbSrvc.collections;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const dbName = routeConfig.DB_NAME;

class Category {
     //_id: ObjectId
     //slug: String
     //name: String
     //desc: String
     //parentId: ObjectId
     //ancestors: [Object]


    /**
     *
     * @param {*} categoryObj Object
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
     *
     * @param {String} categoryName
     * @param {MongoClient} client
     * @return {Object} result Object representing results of db query
     */
    static async findCategoryByName(categoryName, client){
        await connectorSrvc.connect(client);
        let db = client.db('sneakerbox-db');
        try{
            let result = await connectorSrvc.findOne(db, 'categories', {name: categoryName});
            return result;
        }
        catch(e){
            return({err: e.message});
        }
    }
}

module.exports = Category;