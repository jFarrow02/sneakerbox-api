/**
 *@fileoverview This file defines helper functions for performing CRUD (Create, Read, Update, Delete) operations on the database.
 *It exports an object whose properties are the helper functions defined.
*/

/*****************READ OPERATIONS**********************/
/**
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @param {Object} query Object representing db query
 * @returns {Promise} Promise object representing completion of db query
 * @throws {Error} Throws error if query returns no results
 */
const findOne = async function (db, collection, query){
    let result = await db.collection(collection).findOne(query);
    if(result === null){
        throw new Error('No results found');
    }
    return result;
};

/**
 * @param {Db} db Mongo {Db} object instance
 * @param {Collection} collection Mongo {Collection} object instance
 * @returns {Promise} Promise object representing completion of db query
 * @throws {Error} Throws error if query returns no results
 */
const findAll = async function (db, collection){
    let result = await db.collection(collection).find();
    if(result === null){
        throw new Error('No results found');
    }
    return result.toArray();
};

const findOneAndFilter = async function(db, collection, queryObj, filterObj){
    let result = await db.collection(collection).findOne(queryObj, filterObj);
    if(result === null){
        throw new Error('No results found');
    }
    return result;
};

/**************UPDATE OPERATIONS******************/

const updateOne = async function (db, collection, query, update){
    let updated = await db.collection(collection).findOneAndUpdate(query, update);
    if(result === null){
        throw new Error('Unable to update document');
    }
    return updated;
};

module.exports = {
    findOne             :   findOne,
    findAll             :   findAll,
    findOneAndFilter    :   findOneAndFilter,
    updateOne           :   updateOne,
}
