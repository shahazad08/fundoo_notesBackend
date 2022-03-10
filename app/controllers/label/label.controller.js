/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : gets req and res from routes and passes it to the service layer
 * @file            : label.controller.js
 * @author          : Shaikh M. Shahazad
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const labelService = require("../../service/label.service");
const dtoObject = require("../label/label.responseSchema");
//const logger = require("../../../config/logger");
let responseObject;

class LabelController {

  createLabel = async (req, res) => {
    try {
      const data = await labelService.createlabel(req.body);
      console.log("Label Creation Successfull", data)
     // logger.info("label creation Successful", data);
      responseObject = dtoObject.labelApiSuccess;
      responseObject.message = data;
      return res.send(responseObject);
    } catch (err) {
     // logger.error("Could not create label", err);
     console.log("Could not create a label");
      responseObject = dtoObject.labelApiFailure;
      responseObject.message = err.message;
      return res.send(responseObject);
    }
}
}


module.exports = new LabelController();