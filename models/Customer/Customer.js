const path = require('path');
const routeConfig = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig'));
const dbName = routeConfig.DB_NAME;
const collection = require(path.resolve('/sneakerbox', 'services', 'db', 'collections')).customers;

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

    /**
     *
     * @param {String} username
     */
    static async getUserIdByUsername(username, client, connectorSrvc, querySrvc){
        await connectorSrvc.connect(client);
        let db = client.db(dbName);
        try{
            let result = await querySrvc.findOneAndFilter(db, collection, {username: username}, {_id: 1});
            await connectorSrvc.close(client);
            return result;
        }
        catch(e){
            await connectorSrvc.close(client);
            return {err: e.message};
        }
    }
}

module.exports = Customer;