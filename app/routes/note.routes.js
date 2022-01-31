const express = require("express");
const noteController = require("../controllers/note/note.controller");
const noteMiddleware = require("../middleware/note.middleware.js");
const noteRoute = express.Router();


// Create a new Note
noteRoute.post("/",noteMiddleware.ensureToken,noteMiddleware.validate, noteController.createNote);

module.exports = noteRoute;

