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
const mongo = require(path.resolve(__dirname, 'db'));
const connect = mongo.connect;
app.use(cors());
app.use(authRouter.login);
app.use(authRouter.signup);
app.use(pagesRouter.acct);

/**
 * DB helper function. Returns a Promise object that resolves with a {MongoClient} instance
 * on success, or an {Error} instance on failure.
 * @param {String} url 
 * @param {Function} connect 
 * @return {Promise}
 */
// function _db_getConnection(url, connect){
//     connect(url)
//         .then((connection)=>{
//             return connection;
//         })
//         .catch((err)=>{
//             return new Error('Failed to connect to db');
//         })
// }
function _db_getConnection(url, connect){
    return new Promise((resolve, reject)=>{
        try{
            let client = connect(url);
            resolve(client);
        }
        catch(err){
            reject(new Error('Failed to connect to db'));
            //resolve(new Error('Failed to connect to db'));
        }
    });
}

/**
 * Route handler function for GET '/' route
 * @param {Request} req Express {Request} instance
 * @param {Response} res Express {Response} instance
 */
async function getIndexHandler(req, res){
    //let connection = await _db_getConnection(null, connect);  //connection is the result of a function that returns a Promise
    // console.log(connection);
    // if(connection instanceof Error){
    //     res.status(500).json({err: connection.message});
    //     return;
    // }
    let connection;
    try{
        connection = await _db_getConnection(null, connect);
        res.status(200).json({msg: 'Connected to db'});
        return;
    }
    catch(err){
        res.status(500).json({err: err.message});
        return;
    }
    
}

app.get('/', (req, res)=>{
    getIndexHandler(req, res);
});

http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});

//Export app for testing purposes
module.exports = app;