const express = require("express");
const user = require("./schema");
const validator = require("validator");
exports.post = async(req,res)=>{


    const {userName, password, mobile ,email,confirmPassword}= req.body;
    
    
    if(validator.default.isEmail(email)){
    try{
        const find = await user.findOne({email:email});
        if(find){
            res.json("Already exist");
        }
        else{
            const createUser = new user({
                userName,
                password,
                email,
                mobile,
                confirmPassword
               })

            const data = await createUser.save();
           res.json(data);
        }

    }catch(error){
     console.log(error);
    }
}
  else{
    res.json("enter valid email address");
  }
}

exports.login = async(req,res)=>{

    const {password, email} = req.body;
    try{
        const data = await user.findOne({email:email ,password:password});
        if(data){
            res.json("sucessfully login");
           }else {
               res.json("please enter valid email or password");
           }  
    }catch(error){
        console.log(error);
    }
}
