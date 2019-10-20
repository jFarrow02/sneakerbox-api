/**
 *@fileoverview This file defines helper functions for performing CRUD (Create, Read, Update, Delete) operations on the database.
 *It exports an object whose properties are the helper functions defined.
*/

/**
 *
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @param {Object} query Object representing db query
 * @returns
 * @throws {Error}
 */
const findOne = async function (db, collection, query){
    let result = await db.collection(collection).findOne(query);
    if(result === null){
        throw new Error('No results found');
    }
    return result;
}

module.exports = {
    findOne     :   findOne,
}