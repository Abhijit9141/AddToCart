const mongoose = require("mongoose");
const validator = require('validator');

const user = new mongoose.Schema({

    userFirstName:{
        type:String,
        required:[true , "please enter your first name!"]
    },
    userLastName:{
        type:String,
        required:[true , "please enter your last name!"]
    },
    userEmail:{
        type:String,
        required:[true , "please enter your email!"],
        unique:true,
        validate:[validator.default.isEmail,"please enter valid email!"]
    },
    userNumber:{
        type:Number,
        require:[true,"please enter your mobile number!"],
        unique:true
    },
    userPassword:{
        type:String,
        required:[true , "please enter your password!"],
        unique:true
    },
   /* cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    }]
    */

    cart:[{ productName:{
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
    }]
});

exports.model = mongoose.model("User",user);