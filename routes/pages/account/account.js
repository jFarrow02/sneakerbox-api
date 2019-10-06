const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

router.use(bodyParser.json());

router.get('/myaccount', (req, res)=>{
    //Get auth token from 'Authorization' header
    let token = req.get('Authorization');
    if(!token){
        res.status(400).json({err: 'Token not found'});
    }
    verifyJWT(token)
    .then((token)=>{
        //Return account info
        res.status(200).json({msg: 'Token found'});
    })
    .catch((err)=>{
        //Return error message
        res.status(401).json({err: 'Not Authorized'});
    })
});

const verifyJWT = (token)=>{
   //Verify JWT
   jwt.verify(token, secret, (result)=>{
       return new Promise((resolve, reject)=>{
           if(result instanceof Error){
               reject(result);
           }
           else{
               resolve(result);
           }
       });
   });
}

module.exports = router;