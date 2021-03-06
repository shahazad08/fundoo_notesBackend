/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : label routes for label url end points
 * @file            : label.routes.js
 * @author          : Shaikh M. Shahazad
 * @version         : 1.0
 * @since           : 10-03-2022
 *
 **************************************************************************/

const express = require("express");
const labelController=require('../controllers/label/label.controller')
const labelRoute = express.Router();
const labelMiddleware = require("../middleware/note.middleware.js");

// Create a new Label

labelRoute.post("/", labelMiddleware.ensureToken,labelController.createLabel)

labelRoute.get("/", labelMiddleware.ensureToken, labelController.findAll);

labelRoute.get(
    "/:labelId",
    labelMiddleware.ensureToken,
    labelController.findOne
  );

  // Update a Label with LabelId
labelRoute.put(
    "/:labelId",
    labelMiddleware.ensureToken,
    labelController.updateLabel
  );

  // Delete a Label with LabelId
labelRoute.delete(
    "/:labelId",
    labelMiddleware.ensureToken,
    labelController.deleteOne
  );
module.exports = labelRoute;
