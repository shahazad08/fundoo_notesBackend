/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and process them for the users
 * @file            : user.service.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const userModel = require("../models/user.model.js");
const jwtHelper = require("../../utility/jwt");
//const mailHelper = require("../../utility/mailer");
const bcrypt = require("bcrypt");
//const redis = require("../../utility/redis/cache")
class UserService {
  /**
   * @description Service layer function for user login
   * @param {Object} body
   * @param {callback} callback
   */

  loginUser = (body, callback) => {
    userModel.loginUser(body, (err, data) => {
      if (err) {
        return callback(err, null);
      } else {
        if (bcrypt.compareSync(body.password, data.password)) {
          var token = jwtHelper.generateToken(data._id);
          var result = { data: data, token: token };
          return callback(null, result);
        } else {
          return callback("password mismatch");
        }
      }
    });
    
  };

  /**
   * @description Service layer function for user registeration
   * @param {Object} body
   * @param {callback} callback
   */
   registerUser = (body, callback) => {
    userModel.registerUser(body, (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };

    /**
   * @description Service layer function for finding particular user using email
   * @param {string} email
   * @param {callback} callback
   */
     findOneUser = (email, callback) => {
      userModel.findOneUser(email, (err, data) => {
        return err ? callback(err, null) : callback(null, data);
      });
    };
  
      /**
   *@description Service layer function for updating user details
   * @param {Object} userID
   * @param {Object} body
   * @param {callback} callback
   */
  updateUserDetail = (userID, body, callback) => {
    userModel.updateUserDetail(userID, body, (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };

   /**
   *@description Service layer function for deleting a user
   * @param {Object} userID
   * @param {callback} callback
   */
   deleteUser = (userID, callback) => {
    userModel.deleteUser(userID, (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };
}

module.exports = new UserService();
