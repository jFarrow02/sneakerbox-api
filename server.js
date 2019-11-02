const http = require('http');
const express = require('express');
const path = require('path');
let app = express();
let api = express.Router();
const config = require('dotenv').config();
const nodeEnvConfig = {
    'dev': 9000,
    'prod': 8000,
    'test': 3000,
};
const PORT = nodeEnvConfig[process.env.NODE_ENV];
const cors = require('cors');
const initializeDB = require(path.resolve('/sneakerbox', 'services', 'db')).dbConnectorService;
const querySrvc = require(path.resolve('/sneakerbox', 'services', 'db')).dbQueryService;
const db = initializeDB();
// const authRouter = require(path.resolve(__dirname, 'routes', 'auth'));
// const categoryRouter = require(path.resolve(__dirname, 'routes', 'categories'));
// const homeRouter = require(path.resolve(__dirname, 'routes', 'home'));
// const pagesRouter = require(path.resolve(__dirname, 'routes', 'pages'));
const apiRouters = require(path.resolve(__dirname, 'routers', 'apirouters'));
const initRouters = (routerObj, db, querySrvc)=>{
    for(let router in routerObj){
        routerObj[router]['db'] = db;
        routerObj[router]['querySrvc'] = querySrvc;
    }
};
//Mount routers & middleware
app.use(cors());
// app.use(authRouter.login);
// app.use(authRouter.signup);
// app.use(pagesRouter.acct);
// app.use(homeRouter.home);
// app.use(categoryRouter.categories);

initializeDB()
    .then((db)=>{
        //app.use(productsRouter(db, querySrvc)); //Attach db connection to Router and then 'use' in server
        initRouters(apiRouters, db, querySrvc)
        api.use(apiRouters.productRouter);
        app.use('/api', api);

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