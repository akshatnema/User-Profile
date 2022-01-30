const express = require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token'];
     try{
      // const decoded = await jwt.decode(token, {complete: true})
      // console.log(decoded.payload);
       const email=token;
       const user = await User.findOne({ Email: email});
       res.send({status: 'ok', details: user});
     }
     catch(err){
        console.log(err);
        res.json({status: 'error'})
     }
})

module.exports = router;