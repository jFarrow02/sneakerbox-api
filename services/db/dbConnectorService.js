/**
 * @fileOverview This file defines helper functions for creating and closing database connections.
 * It exports an object whose properties are the helper functions defined.
 */


/**
 *
 * @param {MongoClient} client
 * @returns {Promise} connection Promise object representing eventual completion of db 'connect' operation
 */
// const connect = async function(client){
//     /**
//      * TODO: 2019-10-27 14:04 EST
//      * FIGURE OUT HOW TO PROPERLY HANDLE ERROR
//      * WHEN DB IS UNAVAILABLE TO CONNECT
//      */
//     let connection;
//     try{
//         connection = await client.connect(); //client.connect() returns a Promise if no callback passed.
//         console.log('CONNECTION: ', connection);
//         return connection;
//     }
//     catch(err){
//         //connection = Promise.reject
//         process.on('unhandledRejection', (reason, promise)=>{
//             console.log('Unhandled Rejection at: ', reason.stack || reason);
//             console.log('ERR:', err.message);
//             return;
//         })
//     }
//}

const connect = function(client){
    client.connect()
        .then((connection)=>{
            console.log('CONNECT:', connection);
            return connection;
        })
        .catch((err)=>{
            console.log("ERR:", err);
            return new Error(err.message);
        })
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