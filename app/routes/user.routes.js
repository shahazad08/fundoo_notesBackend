/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js              
 * @descrition      : user routes for user url end points
 * @file            : user.router.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 * 
 **************************************************************************/

const express = require("express");
const userController = require("../controllers/user/user.controller");
const userRoute = express.Router();
const { body } = require("express-validator");

//User login
userRoute.post("/login", userController.loginUser);


// Create a new User
userRoute.post(
    "/register",
    userController.registerUser
  );

userRoute.get("/:userID", userController.findOneUser);

userRoute.put(
    "/:userID",
    userController.updateUserDetail
  );

userRoute.delete("/:userID", userController.deleteUser);

//forgot password route
userRoute.post("/forgot", userController.forgotPassword);

//email password reset route
userRoute.post("/reset/:token", userController.resetPassword);




module.exports = userRoute;
