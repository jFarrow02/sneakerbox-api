/**
 * @fileoverview This file aggregates the Express 'Router' objects for the API server, application server,
 * and user authentication server into a single object, and re-exports that object.
 */

const path = require('path');
const apiserver = require(path.resolve('/sneakerbox', 'routers', 'index')).apiserver;
const appserver = require(path.resolve('/sneakerbox', 'routers', 'index')).appserver;
const authserver = require(path.resolve('/sneakerbox', 'routers', 'index')).authserver;

module.exports = {
    apiserver   :   apiserver,
    appserver   :   appserver,
    authserver  :   authserver,
};