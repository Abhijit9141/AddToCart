const userSchema = require("../Models/product");
const catchAsync = require("../utils/catchAsync");

exports.addProduct = catchAsync(async(req,res)=>{

    const product = await userSchema.model.create(req.body);
    if (!product) {
        return next(new AppError('please enter correct dataField', 401));
      }
    res.status(200).json({
        status:"success",
            message:"new product added successfully",
            body:{
                data:product
            }
    })

})

exports.scan = catchAsync(async(req, res)=>{

    const addData = await userSchema.model.findOne({barCode:product.barCode});
    if (!addData) {
        return next(new AppError('bar code is not present', 401));
      }
    res.staus(200).json({
        status:"success",
        message:"scanned successfully",
        body:{
               data:addData
            }
    })
})