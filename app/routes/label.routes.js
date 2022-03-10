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


// Create a new Label

labelRoute.post("/", labelController.createLabel)

module.exports = labelRoute;
