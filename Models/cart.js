const mongoose = require("mongoose");

const cart = new mongoose.Schema({

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
    quantity:{
        type:Number,
        default:1
    }
});

exports.model = mongoose.model("Cart",cart);