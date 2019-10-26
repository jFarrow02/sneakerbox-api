const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const checkAuthentication = (req, res, next)=>{
    let bearerRegex = /^Bearer\s*"/;
    let closeParenRegex = /"$/;
    let token = req.get('Authorization').replace(bearerRegex, '').replace(closeParenRegex, '');
    
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