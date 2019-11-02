const http = require('http');
const express = require('express');
const path = require('path');
let app = express();
const config = require('dotenv').config();
const nodeEnvConfig = {
    'dev': 9000,
    'prod': 8000,
    'test': 3000,
};
const PORT = nodeEnvConfig[process.env.NODE_ENV];
const cors = require('cors');
const authRouter = require(path.resolve(__dirname, 'routes', 'auth'));
const categoryRouter = require(path.resolve(__dirname, 'routes', 'categories'));
const homeRouter = require(path.resolve(__dirname, 'routes', 'home'));
const pagesRouter = require(path.resolve(__dirname, 'routes', 'pages'));
const productsRouter = require(path.resolve(__dirname, 'routes', 'products'));
const apiserver = require(path.resolve(__dirname, 'routers', 'master_router')).apiserver;
const appserver = require(path.resolve(__dirname, 'routers', 'master_router')).appserver;
const initializeDB = require(path.resolve(__dirname, 'services', 'db')).dbConnectorService;
const querySrvc = require(path.resolve(__dirname, 'services', 'db')).dbQueryService;

const db = initializeDB();
//Mount routers & middleware
app.use(cors());
app.use(authRouter.login);
app.use(authRouter.signup);
app.use(pagesRouter.acct);
app.use(homeRouter.home);
app.use(categoryRouter.categories);
/*********************************/
app.use('/api', apiserver);
app.use('/app', appserver);
/*********************************/

initializeDB()
    .then((db)=>{
        app.use(productsRouter(db, querySrvc)); //Attach db connection to Router and then 'use' in server
        http.createServer(app).listen(PORT, ()=>{
            console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
        });
    })
    .catch((err)=>{
        console.log(err.message);
    })
    .finally(()=>{
        //Export app for testing purposes
        module.exports = app;
    })