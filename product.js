const product = require("./productSchema");


exports.addProduct = async(req,res) =>{
    
    const {productName , productPrice , barCode , productDetails} = req.body;
    try{

        const newProduct = new product({

            productName,
            productPrice,
            barCode,
            productDetails
        });

        const saveProduct = await newProduct.save();
        res.json(saveProduct);
    }catch(err){
        console.log(err);
    }
}

exports.getProduct = async(req,res) => {

    const {barCode} = req.body;
    try{
        const scanProduct = await product.findOne({barCode:barCode});
        res.json(scanProduct);
    }catch(err){
        console.log(err);
    }
}