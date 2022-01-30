const express = require('express');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user.model')

router.post('/',async function(req, res){
    const user = await User.findOne({
          Email: req.body.email
      })  
    if(user && await bcrypt.compare(req.body.password, user.Password)){
        const token = jwt.sign({
            Email: user.email
        }, 'secret1234')
        res.json({status: 'success', user:user.Email})
    }else{
        res.json({status: 'error', user:false})
    }  
})

module.exports=router