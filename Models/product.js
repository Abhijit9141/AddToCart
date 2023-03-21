const mongoose = require("mongoose");

const product = new mongoose.Schema({

    productName:{
        type:String,
        required:true,
    },
    productDetails:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true,
    },
    barCode:{
        type:Number,
        require:true,
        unique:true
    },
});

exports.model = mongoose.model("Product",product);