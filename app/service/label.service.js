/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and process them for the labels in fundo labels
 * @file            : label.service.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

//const labelModel = require("../models/label.model.js");
const labelModel=require("../models/label.model")

class LabelService {
  /**
   * @description Service layer function to create a label
   * @param {Object} body
   * @returns err or data
   */
  createlabel = (body) => {
    try {
      const data = labelModel.createLabel(body.title, body.userId);
      return data;
    } catch (error) {
      throw error;
    }
  }


findAll = async (userId) => {
  try {
    const data = await labelModel.findAll(userId);
    return data;
  } catch (error) {
    throw error;
  }
};

 /**
   * @description Service layer function to find a label
   * @param {string} labelId
   * @returns err or data
   */
  findOne = async (userId, labelId) => {
    try {
      const data = await labelModel.findOne(userId, labelId);
      return data;
    } catch (error) {
      throw error;
    }
  };

   /**
   * @description Service layer function to update a label
   * @param {string} labelId
   * @param {Object} body
   * @returns err or data
   */
    updatelabel = async (userId, labelId, body) => {
      try {
        const data = await labelModel.updatelabel(userId, labelId, body);
        return data;
      } catch (error) {
        throw error;
      }
    };

    /**
   * @description Service layer function to delete a label
   * @param {String} labelId
   * @returns err or data
   */
  deleteOne = (userId, labelId) => {
    try {
      const data =  labelModel.deleteOne(userId, labelId);
      return data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * @description finds a label and deletes it
   * @param {Object} labelId
   * @returns err or data
   */
   deleteOne = (userId, labelId) => {
    try {
      const data = myLabel.findOneAndRemove({
        userId: userId,
        _id: labelId,
      });
      if (!data) {
        throw "You dont have access to this label";
      } else {
        return data;
      }
    } catch (error) {
      throw error;
    }
  };

}

module.exports = new LabelService();