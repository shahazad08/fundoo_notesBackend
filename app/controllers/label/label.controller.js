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



    /**
     * @description Handles the request and response for finding all labels
     * @param {Object} req
     * @param {Object} res
     */
    findAll = async (req, res) => {
        try {
            const data = await labelService.findAll(req.body.userId);
            //  logger.info(data);
            responseObject = dtoObject.labelApiSuccess;
            responseObject.message = data;
            return res.send(responseObject);
        } catch (err) {
            //  logger.error("Could not find label", err);
            responseObject = dtoObject.labelApiFailure;
            responseObject.message = err.message;
            return res.send(responseObject);
        }
    };

    /**
     * @description Handles the request and response for finding a single label
     * @param {Object} req
     * @param {Object} res
     */
    findOne = async (req, res) => {
        try {
            const data = await labelService.findOne(
                req.body.userId,
                req.params.labelId
            );
            if (!data) {
                responseObject = dtoObject.labelApiFindFailure;
                return res.send(responseObject);
            }
            //logger.info(data);
            responseObject = dtoObject.labelApiSuccess;
            responseObject.message = data;
            return res.send(responseObject);
        } catch (err) {
            // logger.error("Could not find label", err);
            if (err.kind === "ObjectId") {
                responseObject = dtoObject.labelApiFindFailure;
                responseObject.message = err.message;
                return res.send(responseObject);
            }
            responseObject = dtoObject.labelApiFailure;
            responseObject.message = err;
            return res.send(responseObject);
        }
    };


    /**
     * @description Handles the request and response for updating a label
     * @param {Object} req
     * @param {Object} res
     */
    updateLabel = async (req, res) => {
        try {
            const data = await labelService.updatelabel(
                req.body.userId,
                req.params.labelId,
                req.body
            );
            if (!data) {
                responseObject = dtoObject.labelApiFindFailure;
                return res.send(responseObject);
            }
            // logger.info(data);
            responseObject = dtoObject.labelApiSuccess;
            responseObject.message = data;
            return res.send(responseObject);
        } catch (err) {
            //logger.error("Could not update label", err);
            if (err.kind === "ObjectId") {
                responseObject = dtoObject.labelApiFindFailure;
                responseObject.message = err.message;
                return res.send(responseObject);
            }
            responseObject = dtoObject.labelApiFailure;
            responseObject.message = err;
            return res.send(responseObject);
        }
    };


    /**
     * @description Handles the request and response for deleting a label
     * @param {Object} req
     * @param {Object} res
     */
    deleteOne =  (req, res) => {
        try {
            const data =  labelService.deleteOne(
                req.body.userId,
                req.params.labelId
            );
            if (!data) {
                responseObject = dtoObject.labelApiFindFailure;
                return res.send(responseObject);
            }
            //  logger.info(data);
            responseObject = dtoObject.labelApiSuccess;
            responseObject.message = "deleted successfully";
            return res.send(responseObject);
        } catch (err) {
            // logger.error("Could not delete label", err);
            console.log("Could not delete label", err);
            if (err.kind === "ObjectId") {
                responseObject = dtoObject.labelApiFindFailure;
                responseObject.message = err.message;
                return res.send(responseObject);
            }
            responseObject = dtoObject.labelApiFailure;
            responseObject.message = err;
            return res.send(responseObject);
        }
    };
}


module.exports = new LabelController();