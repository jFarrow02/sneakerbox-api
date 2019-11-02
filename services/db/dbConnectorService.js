/**
 * @fileOverview This file defines helper functions for creating and closing database connections.
 * It exports a FUNCTION that establishes a connection wth the MongoDB database,
 * and returns an OBJECT with a single property, 'db'. This property
 * represents a pool of database connections that can be re-used by all instances of
 * the application's {Router} objects.
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
            /**
             * TODO: 2019-11-02 13:16EST
             * NEED A BETTER SYSTEM FOR LOGGING ERRORS
             */
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