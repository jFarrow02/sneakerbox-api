const dbConnectorService = require('./dbConnectorService');
const dbQueryService = require('./dbQueryService');
const collections = require('./collections');

module.exports = {
    collections         :   collections,
    dbConnectorService  :   dbConnectorService,
    dbQueryService      :   dbQueryService,
};