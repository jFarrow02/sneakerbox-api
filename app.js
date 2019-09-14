const http = require('http');
const express = require('express');
let app = express();
const PORT = process.env.NODE_ENV === 'prod' ? 3000 : 8080;
const path = require('path');
const cors = require('cors');
const authRouter = require(path.resolve(__dirname, 'routes', 'login', 'login.js'));

app.use(cors());
app.use('*', authRouter);

http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});