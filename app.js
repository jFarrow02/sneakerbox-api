const http = require('http');
const express = require('express');
let app = express();
const PORT = 8081;
const path = require('path');
const cors = require('cors');
const authRouter = require(path.resolve(__dirname, 'routes', 'login', 'login.js'));

app.use(cors());

app.use('*', authRouter);

http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});