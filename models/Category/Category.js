const path = require('path');
const DB_CONST = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));
const connectorSrvc = DB_CONST.dbConnectorService;
const collections = DB_CONST.collections;
const dbName = process.env.DB_NAME;

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
     * @param {String} name
     * @param {MongoClient} client
     * @return {Boolean |}
     */
    static async findCategoryByName(name, client){
        let result,
            db,
            query = {name: name};
        if(!name || !client){
            result = {err: 'Improperly-formed query'};
        }
        try{
            await connectorSrvc.connect(client);
            db = client.db(dbName);
            result = await connectorSrvc.findOne(db, collections.categories, query);
            connectorSrvc.close(client);
        }
        catch(e){
            result = {err: e.message}
        }
        return result;
    }
}

module.exports = Category;