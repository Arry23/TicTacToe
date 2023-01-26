const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

    userid:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('userdb',userschema);