const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const routeConfig = require(path.resolve(__dirname, '../../config', 'routeConfig.js'));
const saltRounds = 10;
const helpers = require(path.resolve(path.resolve(__dirname, '../../../services/utils', 'helpers.js')));

router.use(bodyParser.json());

router.post('/signup', (req, res)=>{

    /**
     * TODO: Create user input validation for request params
     */
    let username = req.body.username,
        password = req.body.password;
        
    bcrypt.hash(password, saltRounds).then((hash)=>{
        helpers.log(hash);
    })
        .catch((err)=>{
            helpers.log(err.message);
            res.status(500).json({err: 'Error connecting to db'});
            return;
        })
});

module.exports = router;