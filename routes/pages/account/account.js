const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const routeProtector = require(path.resolve('/sneakerbox', 'middleware', 'index.js'));
const checkAuthentication = routeProtector.checkAuthentication;
router.use(bodyParser.json());

router.get('/myaccount', checkAuthentication, (req, res)=>{
    res.status(200).json({msg: 'Token found'});
});

module.exports = router; 