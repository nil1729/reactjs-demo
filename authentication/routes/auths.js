const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const checkAuthentication = require('../middleware/checkAuthentication');


//  GET Route
//  Get a Logged in User
//  Public


router.get('/', checkAuthentication , async(req, res) => {
    try {
        const foundUser = await User.findById(req.user.id).select("-password");
        res.status(401).json(foundUser);
    } catch (e) {
        res.status(500).json({
            msg: 'Server Error'
        });
    }
});

// POST Route
//  Login a User
// Private

router.post('/',[
    check('email', 'Please Enter a valid Email').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
] ,async(req, res) => {
    const validationErrors = validationResult(req);
    let errors = '';
    validationErrors.errors.forEach(error => 
        errors += `<p>${error.msg}</p>`);
    if(errors !== ''){
         res.json({
             msg: errors
         });
    }
    const {email, password} = req.body;
    try{
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return res.status(401).json({
                msg: 'Authentication Error'
            });
        }
        const isMatch = await bcrypt.compare(password, foundUser.password);

        if(!isMatch){
            return res.status(401).json({
                msg: 'Authentication Error'
            });
        }

        const payload = {
            user:{
                id: foundUser._id
            }
        };
        jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token)=>{
            if(err){
                return res.status(500).json({
                    msg: 'Server Error'
                });
            }
            res.status(200).json(token);
        });

    }catch(e){
        res.status(500).json({
            msg: 'Server Error'
        });
    }
});


module.exports = router;