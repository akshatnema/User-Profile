const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Phone:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', User);