const express = require("express");
const productController = require("../Controller/productController");
const router = express.Router();

router
  .route("/add/product")
  .get(productController.addProduct)
  .post(productController.addProduct)

router
  .route("/scan/product")
  .get(productController.scan)
  .post(productController.scan)

module.exports = router;