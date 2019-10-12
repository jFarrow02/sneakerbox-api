const http = require('http');
const express = require('express');
let app = express();
const path = require('path');
const config = require('dotenv').config();
const nodeEnvConfig = {
    'dev': 9000,
    'prod': 8000,
    'test': 3000,
};
const PORT = nodeEnvConfig[process.env.NODE_ENV];
const cors = require('cors');
const authRouter = require(path.resolve(__dirname, 'routes', 'auth', 'index.js'));
const pagesRouter = require(path.resolve(__dirname, 'routes', 'pages', 'index.js'));
const routeConfig = require(path.resolve(__dirname, 'routes', 'config', 'routeConfig.js'));
const connString = routeConfig.CONNECTION_URL;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(connString, {useNewUrlParser: true, useUnifiedTopology: true});
const mongo = require(path.resolve(__dirname, 'db'));
const connect = mongo.connect;
app.use(cors());
app.use(authRouter.login);
app.use(authRouter.signup);
app.use(pagesRouter.acct);

/**
 * Route handler function for GET '/' route
 * @param {Request} req Express {Request} instance
 * @param {Response} res Express {Response} instance
 * @param {Function} connectFunc
 * @param {MongoClient} client
 */
async function getIndexHandler(req, res, connectFunc, client){
    let connection;
    try{
        connection = await connectFunc(client);
        res.status(200).json({msg: 'Connected to db'});
        return;
    }
    catch(err){
        // res.status(500).json({err: 'failed to connect to db'});
        res.status(500).json({err: err.message});
        return;
    }
    
}

app.get('/', (req, res)=>{
    getIndexHandler(req, res, connect, client);
});

http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});

//Export app for testing purposes
module.exports = app;