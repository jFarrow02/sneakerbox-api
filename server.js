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
const authRouter = require(path.resolve(__dirname, 'routes', 'auth', 'index.js'));
const categoryRouter = require(path.resolve(__dirname, 'routes', 'categories', 'index.js'));
const homeRouter = require(path.resolve(__dirname, 'routes', 'home', 'index.js'));
const pagesRouter = require(path.resolve(__dirname, 'routes', 'pages', 'index.js'));

//Mount routers & middleware
app.use(cors());
app.use(authRouter.login);
app.use(authRouter.signup);
app.use(pagesRouter.acct);
app.use(homeRouter.home);
app.use(categoryRouter.categories);


http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});

//Export app for testing purposes
module.exports = app;