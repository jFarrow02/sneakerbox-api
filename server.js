const http = require('http');
const express = require('express');
const path = require('path');
let server = express();
const api = express.Router();
const app = express.Router();
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
const apiRouters = require(path.resolve(__dirname, 'routers', 'apirouters'));
const appRouters = require(path.resolve(__dirname, 'routers', 'approuters'));

const initRouters = (routerObj, db, querySrvc, parentRouter)=>{
    for(let router in routerObj){
        routerObj[router]['db'] = db['db'];
        routerObj[router]['querySrvc'] = querySrvc;
        parentRouter.use(routerObj[router]);
    }
};
//Mount routers & middleware
server.use(cors());
// app.use(authRouter.login);
// app.use(authRouter.signup);

initializeDB()
    .then((db)=>{
        initRouters(apiRouters, db, querySrvc, api);
        initRouters(appRouters, db, querySrvc, app);
        server.use('/api', api);
        server.use('/app', app);

        http.createServer(server).listen(PORT, ()=>{
            console.log(`Server listening on port ${PORT}; env=${process.env.NODE_ENV}`);
        });
    })
    .catch((err)=>{
        console.log(err.message);
    })
    .finally(()=>{
        module.exports = app; //Export app for testing purposes
    });