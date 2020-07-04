//! Models 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    loadUser: async (args, req) => {
        try {
            if (!req.isAuth) {
                throw ('Authentication Error');
            }
            const user = await User.findById(req.userID);
            return user;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }

    },
    registerUser: async args => {
        try {
            const {
                name,
                email,
                password
            } = args.userInput;
            let user = await User.findOne({
                email
            });
            if (user) {
                throw ('Email Already Registered');
            }
            user = new User({
                name,
                email,
                password
            });
            user.password = await bcrypt.hash(password, 10);
            user = await user.save();
            const payload = {
                id: user.id
            }
            const token = await jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });
            return {
                token,
                user
            };
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    loginUser: async args => {
        try {
            const {
                email,
                password
            } = args.userInput;
            let user = await User.findOne({
                email
            });
            if (!user) {
                throw ('Authentication Error');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw ('Authentication Error');
            }
            const payload = {
                id: user.id
            }
            const token = await jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });
            return {
                token,
                user
            };
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
}