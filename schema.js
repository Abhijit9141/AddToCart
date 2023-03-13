const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        unique:true,
        required:true    
    },

    password:{
        type:String,
        required:true   
    },
    confirmPassword:{
        type:String
    },
    cart:{
        type:Array
    },
    history:{
        type:Array
    }
});

const model = mongoose.model("schema",schema);
module.exports = model;