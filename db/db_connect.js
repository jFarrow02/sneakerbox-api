
/**
 * 
 * @param {MongoClient} client 
 */
const connect = async function(client){
    let connection = await client.connect(); //client.connect() returns a Promise if no callback passed
    return connection;
}

module.exports = connect;