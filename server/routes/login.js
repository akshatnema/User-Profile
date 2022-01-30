const express = require('express');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user.model')

router.post('/',async function(req, res){
    const user = await User.findOne({
          email: req.body.email,
          password: req.body.password
      })
    if(user && await bcrypt.compare(req.body.password, user.Password)){
        const token = jwt.sign({
            email: user.email
        }, 'secret1234')
        res.json({status: 'success', user:token})
    }else{
        res.json({status: 'error', user:false})
    }  
})

module.exports=router