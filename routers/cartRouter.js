const express = require("express");
const cartController = require("../Controller/cartController");
const router = express.Router();

router.route("/scan/cart")
  .post(cartController.addToCart)
  .get(cartController.getCart);

module.exports = router;