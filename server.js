const http = require('http');
const express = require('express');
let app = express();
const path = require('path');
const config = require('dotenv').config();
const PORT = process.env.NODE_ENV === 'prod' ? 8000 : 9000;
const cors = require('cors');
const authRouter = require(path.resolve(__dirname, 'routes', 'auth', 'index.js'));
const pagesRouter = require(path.resolve(__dirname, 'routes', 'pages', 'index.js'));

app.use(cors());
app.use(authRouter.login);
app.use(authRouter.signup);
app.use(pagesRouter.acct);

app.get('/', (req, res)=>{
    res.status(200).json({msg: 'Routing to login authentication view...'});
});



http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});