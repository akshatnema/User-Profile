const express = require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token'];
     try{
       const decoded = jwt.verify(token, 'secret1234')
       const email= decoded.email;
       const user = await User.findOne({ email: email});
       res.send({status: 'ok', details: user});
     }
     catch(err){
        console.log(err);
        res.json({status: 'error'})
     }
})

module.exports = router;