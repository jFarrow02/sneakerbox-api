/**
 * @fileOverview This file defines helper functions for creating and closing database connections.
 * It exports an object whose properties are the helper functions defined.
 */

const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const DB_URL = require(path.resolve('/sneakerbox', 'routes', 'config', 'routeConfig')).CONNECTION_URL;
const dbName = process.env.DB_NAME;

/**
 * @param {String} url URL of MongoDB instance to which to connect
 * @returns {Promise} Promise object representing completion of database connection operation
 */
const connect = (url)=>{
    return MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((client)=>client.db(dbName))
        .catch((err)=>{
            console.log(err.message);
        })
}

/**
 * Connects asynchronously to the MongoDB instance via the {MongoClient} object.
 * Creates and returns an object with a property 'db' of the {Db} class,
 * representing the connected database.
 *
 * @returns {Object} Object with 'db' property representing database connection
 */
const dbConnectorService = async()=>{
    let db = await connect(DB_URL);

    return { db  :   db };
};

module.exports = dbConnectorService;