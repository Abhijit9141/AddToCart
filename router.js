const express = require("express");
const { addProduct, getProduct } = require("./product");
const { post, login } = require("./user");
const router = express.Router();
router.post("/createUser", post);
router.post("/login",login);
router.post("/new/product",addProduct);
router.post("/scan/product",getProduct);
module.exports=router;
