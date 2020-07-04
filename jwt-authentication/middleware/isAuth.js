const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        if (!token) {
            req.isAuth = null;
            return next();
        }
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.isAuth = true;
        req.userID = decodedToken.id;
        next();
    } catch (e) {
        console.log(e);
        req.isAuth = null;
        next();
    }
};