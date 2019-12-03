const config = require('dotenv').config().parsed;
const DB_PORT = config.DB_PORT;
const DB_URL = config.DB_URL;
const DB_HOST = 'mongodb://';
const DB_NAME = config.DB_NAME;
const CONNECTION_URL = `${DB_HOST}${DB_URL}:${DB_PORT}`;

const configObj = {
    CONNECTION_URL: CONNECTION_URL,
    DB_HOST: DB_HOST,
    DB_NAME: DB_NAME,
    DB_PORT: DB_PORT,
    DB_URL: DB_URL,
};

module.exports = configObj;