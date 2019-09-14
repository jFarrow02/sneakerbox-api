const http = require('http');
const express = require('express');
let app = express();
const PORT = process.env.NODE_ENV === 'prod' ? 3000 : 8080;


http.createServer(app).listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}; env=${process.env.NODE_ENV}`);
});