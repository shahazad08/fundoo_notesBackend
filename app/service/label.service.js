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
}

module.exports = new LabelService();