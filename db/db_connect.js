const MongoClient = require('mongodb').MongoClient;

const connect = async function(url, options){
    const client = new MongoClient(url, options);
    let connection = await client.connect(); //client.connect() returns a Promise if no callback passed
    return connection;
}

module.exports = connect;