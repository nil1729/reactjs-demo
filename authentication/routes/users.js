const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');


//  POST Route
//  Register a user and get a token 
//  Public

router.post('/',[
    check('name', 'Please enter a name').not().isEmpty(),
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
    const {email, name, password} = req.body;
    try{
        const newUser = new User({
            email,
            password,
            name
        });
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        const user = await newUser.save();
        const payload = {
            user:{
                id: user._id
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
        if(e.message.indexOf('duplicate key error collection')>0){
             res.status(400).json({
                 msg: 'Email already registered'
             });
        }else{
            res.status(500).json({
                msg: 'Server Error'
            });
        }
    }
});

module.exports = router;