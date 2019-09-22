const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/login', (req, res)=>{
    res.status(202).json({msg: 'Login route posted OK'});
});

module.exports = router;