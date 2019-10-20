/**
 * @fileOverview This file defines helper functions for creating and closing database connections.
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

const dbConnectorService = {
    close       :       close,
    connect     :       connect,
};

module.exports = dbConnectorService;