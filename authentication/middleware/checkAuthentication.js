const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next)=>{
    const token = req.headers['x-auth-token'];
    if(!token){
        return res.status(401).json({
            msg: 'Authentication Error'
        });
    }
    jwt.verify(token, config.get('jwtSecret'), (err, decoded)=>{
        if(err){
            return res.status(401).json({
                msg: 'Authentication Error'
            });
        }
        req.user = decoded.user;
        next();
    });
};
