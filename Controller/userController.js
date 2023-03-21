const userSchema = require("../Models/user");
const catchAsync = require("../utils/catchAsync");

exports.createNewUser = catchAsync(async(req , res)=>{
    const user = await userSchema.model.create(req.body);
    if (!user) {
        return next(new AppError('user is not exist', 404));
      }
    res.status(201).json({
        status:"success",
        message:"new uesr created successfully",
        body:{
            data:user
        }
    })
})

exports.loginUser = catchAsync(async(req,res)=>{
    const data = req.body;
    const user = await userSchema.model.findOne({
        userEmail:data.userEmail,
        userPassword:data.userPassword
    });
    if (!user) {
        return next(new AppError('user is not found', 404));
      }
        res.status(200).json({
            status:"success",
            message:"login successful",
            body:{
                data:user
            }
        })

})

exports.updateUser = catchAsync(async(req,res) =>{

    const user = req.body;
    const email = await userSchema.model.findOne({
        userEmail:user.userEmail
    });
    if (!email) {
        return next(new AppError('data is not present in the cart', 404));
      }
    
    const updateUser = await userSchema.model.updateOne({_id:req.params.userId},{
        userPassword:user.userPassword
    });
    res.status(200).json({
        status:"success",
        message:"updated successfully",
        body:{
            data:updateUser
        }
    })
})



exports.getUser=catchAsync(async(req,res)=>{

    const get = await userSchema.model.findById(req.params.id)
    
    res.status(200).json({
        status:"success",
        message:"grt user successfully",
        body:{
            data:get
        }
    })
    })