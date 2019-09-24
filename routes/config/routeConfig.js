const DB_URL = process.env.DB_URL;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = 'mongodb://';
const DB_NAME = process.env.DB_NAME;
const CONNECTION_URL = `${DB_HOST}${DB_URL}:${DB_PORT}`;

const config = {
    CONNECTION_URL: CONNECTION_URL,
    DB_HOST: DB_HOST,
    DB_NAME: DB_NAME,
    DB_PORT: DB_PORT,
    DB_URL: DB_URL,
};

module.exports = config;