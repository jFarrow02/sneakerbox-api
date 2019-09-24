const express = require('express');
const router = express.Router();

router.get('/signup', (req, res)=>{
    res.status(200).json({msg: 'Redirecting to signup route...'});
});

module.exports = router;