const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    barCode:{
        type:Number,
        required:true,
        unique:true
    },
    productDetails:{
        type:String
    }

});

const product = mongoose.model("product",productSchema);
module.exports = product;