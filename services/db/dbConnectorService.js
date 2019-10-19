/**
 * @fileOverview This file defines helper functions for database operations (connecting, CRUD, etc)
 * It exports an object whose properties are the helper functions defined.
 */


/**
 *
 * @param {MongoClient} client
 * @returns {Promise} connection Promise object representing eventual completion of db 'connect' operation
 */
const connect = async function(client){
    let connection = await client.connect(); //client.connect() returns a Promise if no callback passed.
    return connection;
}

/**
 *
 * @param {MongoClient} client
 * @returns {Promise} closed Promise object representing eventual completion of db 'close' operation
 */
const close = async function (client){
    let closed;
    if(client){
        closed = await client.close();
    }
    else{
        closed = new Promise((resolve, reject)=>{
            reject(new Error('Error closing db'));
        });
    }
    return closed;
}

/**
 *
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @param {Object} query Object representing db query
 * @returns {Promise} Promise object representing eventual completion of 'findOne' db operation
 * @throws {Error}
 */
const findOne = async function (db, collection, query){
    let found = await db[collection].findOne(query);
    if(found.data !== null){
        return new Promise((resolve)=>{
            resolve(found.data);
        });
    }
    else{
        return new Promise((resolve, reject)=>{
            reject(new Error('Resource not found'));
        });
    }
}

const dbConnectorService = {
    close       :       close,
    connect     :       connect,
    findOne     :       findOne,
};

module.exports = dbConnectorService;