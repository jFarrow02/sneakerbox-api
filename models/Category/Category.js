const path = require('path');
const dbSrvc = require(path.resolve('/sneakerbox', 'services', 'db', 'index.js'));
const connectorSrvc = dbSrvc.dbConnectorService;
const collections = dbSrvc.collections;
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig.js'));
const dbName = routeConfig.DB_NAME;

class Category {
    /**
     * _id: ObjectId
     * slug: String
     * name: String
     * desc: String
     * parentId: ObjectId
     * ancestors: [Object]
     */


    /**
     *
     * @param {*} catetoryObj Object
     */
    //Construct a new Category object using return value from DB query
    constructor(catetoryObj){
        let keys = keys(catetoryObj);
        keys.forEach((key)=>{
            this[key] = catetoryObj[key];
        });
    }

    /**
     *
     * @param {String} categoryName
     * @param {MongoClient} client
     * @return {Boolean |}
     */
    static async findCategoryByName(categoryName, client){
        await connectorSrvc.connect(client);
        let db = client.db('sneakerbox-db');
        let result = await connectorSrvc.findOne(db, 'categories', {name: categoryName});
        return result;
    }
}

module.exports = Category;