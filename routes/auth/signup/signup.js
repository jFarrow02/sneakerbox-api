const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const routeConfig = require(path.resolve(__dirname, '../../config', 'routeConfig.js'));
const connectionUrl = `${routeConfig.DB_HOST}${routeConfig.DB_URL}:${routeConfig.DB_PORT}`;

router.use(bodyParser.urlencoded({extended: true}));

router.post('/signup', (req, res)=>{

    //res.status(200).json({msg: 'Redirecting to signup route...'});
});

module.exports = router;