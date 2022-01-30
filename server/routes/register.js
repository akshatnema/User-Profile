const express = require('express');
const router=express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

router.post('/', async function(req, res){
   const hash = await bcrypt.hash(req.body.password, 5);
   try{
     const user = await User.create({
         Firstname: req.body.name,
         Lastname: req.body.last,
         Address: req.body.address,
         Email: req.body.email,
         Phone: req.body.phone,
         Password: hash
     });
     res.json({status:"ok"});
   }
   catch(err){
     res.json({status:"error", error: "Duplicate Data"});
   }
})

module.exports=router