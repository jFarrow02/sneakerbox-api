const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const checkAuthentication = (req, res, next)=>{
    let token = req.get('Authorization');
    
    jwt.verify(token, secret, (err, payload)=>{
        if(err){
            res.status(401).json({err: 'Forbidden'});
            return;
        }
        else{
            next();
        }
    });
};

module.exports = {
    checkAuthentication :   checkAuthentication,
}