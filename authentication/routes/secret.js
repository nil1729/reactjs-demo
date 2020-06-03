const express = require('express');
const router = express.Router();
const checkAuthentication = require('../middleware/checkAuthentication');


router.get('/', checkAuthentication,(req, res) => {
     res.json({
         msg:'Welcome to the Secret Page'
     });
});




module.exports = router