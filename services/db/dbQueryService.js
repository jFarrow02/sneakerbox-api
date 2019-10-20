/**
 *@fileoverview This file defines helper functions for performing CRUD (Create, Read, Update, Delete) operations on the database.
 *It exports an object whose properties are the helper functions defined.
*/

/*****************READ OPERATIONS**********************/
/**
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @param {Object} query Object representing db query
 * @returns {Object} result Object that is result of successful database query
 * @throws {Error} Throws error if query returns no results
 */
const findOne = async function (db, collection, query){
    let result = await db.collection(collection).findOne(query);
    if(result === null){
        throw new Error('No results found');
    }
    return result;
}

/**
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @returns {Object} result Object that is result of successful database query
 * @throws {Error} Throws error if query returns no results
 */
const findAll = async function (db, collection){
    let result = await db.collection(collection).find();
    if(result === null){
        throw new Error('No results found');
    }
    return result;
}

// const query = async function (){

//}
// let db = client.db(dbName);
//         try{
//             let result = await querySrvc.findOne(db, collections.categories, {name: categoryName});
//             await connectorSrvc.close(client);
//             return result;
//         }
//         catch(e){
//             await connectorSrvc.close(client);
//             return({err: e.message});
//         }
module.exports = {
    findOne     :   findOne,
    findAll     :   findAll,
}
