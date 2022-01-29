/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : user model creates user schema and performs db operation
 * @file            : user.model.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const jwtHelper = require("../../utility/jwt");
const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);
const myUser = mongoose.model("User", userSchema);
let encryptedPassword;
class UserModel {
  /**
   * @description model function for user login
   * @param {Object} body
   * @param {callback} callback
   * @returns err or data
   */
  loginUser = (body, callback) => {
    return myUser.findOne({ email: body.email }, (err, data) => {
      return err
        ? callback(err, null)
        : data == null
        ? callback("Email id is not present", null)
        : callback(null, data);
    });
  };

  /**
   * @description model function for user registeration
   * @param {Object} body
   * @param {callback} callback
   * @returns err or data
   */
 registerUser = (body, callback) => {
  encryptedPassword = bcrypt.hashSync(body.password, 10);
  const user = new myUser({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: encryptedPassword,
  });

  return user.save((err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

findOneUser = (email, callback) => {
  myUser.findOne({ email: email }, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

 /**
   * @description model function for user detail updation
   * @param {string} userID
   * @param {Object} body
   * @param {callback} callback
   * @returns err or data
   */
  updateUserDetail = (userID, body, callback) => {
    // Find user and update it with the request body
    myUser.findByIdAndUpdate(
      userID,
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      },
      { new: true },
      (err, data) => {
        return err ? callback(err, null) : callback(null, data);
      }
    );
  };

   /**
   *@description model function for user deletion
   * @param {string} userID
   * @param {callback} callback
   * @returns err or data
   */
   deleteUser = (userID, callback) => {
    myUser.findByIdAndRemove(userID, (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };
}

// const myUser = mongoose.model("User", userSchema);

// module.exports = new UserModel();



module.exports = new UserModel();

