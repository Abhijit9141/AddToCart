const cart = require("../Models/cart");
const product = require("../Models/product");
const user = require("../Models/user");
const catchAsync = require("../utils/catchAsync")
exports.addToCart = catchAsync(async(req,res)=>{
    const scanData = await product.model.findOne({barCode:req.body.barCode});
    if (!scanData) {
        return next(new AppError('barCode is not matching', 401));
      }
    const pushToCart = await user.model.updateOne({
        $push:{cart:{            
       productName:scanData.productName,
       productDetails:scanData.productDetails,
       productPrice:scanData.productPrice,     
       }}
    })
    console.log(scanData);
    res.status(200).json({
        status:"success",
            message:"data push successfully",
            body:{
                data:pushToCart
            }
    })
}
)

exports.getCart = catchAsync(async(req,res) => {
    const data = await cart.model.find()
    if (!data) {
        return next(new AppError('data is not present in the cart', 404));
      }
    res.status(200).json({
        status:"success",
            message:"cart added successfully",
            body:{
                data:data
            }
    })
})