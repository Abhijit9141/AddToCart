const userController = require("../Controller/userController");
const express = require("express");
const router = express.Router();

router
  .route("/new/user")
  .post(userController.createNewUser);

router
  .route("/login/user")
  .post(userController.loginUser);

router
  .route("/update/user/:userId")
  .put(userController.updateUser)
  .get(userController.getUser);

module.exports = router;