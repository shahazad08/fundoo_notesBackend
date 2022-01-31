
const noteService = require("../../service/note.service");
const dtoObject = require("./note.responseSchema");
//const logger = require("../../../config/logger");
const multer = require("../../../utility/multer");
let responseObject;
class NoteController {
  /**
   * @description Handles the request and response for creating a note
   * @param {Object} req
   * @param {Object} res
   */
  createNote = (req, res) => {
    let body = req.body;
    noteService.createNote(body, (err, data) => {
      if (err) {
      //  logger.error("Could not create Note", err);
      console.log("Could not create Note", err);
        responseObject = dtoObject.noteApiFailure;
        responseObject.message = err.message;
        return res.send(responseObject);
      }
      //logger.info("Note creation Successful", data);
      console.log("Note creation Successful", data);
      responseObject = dtoObject.noteApiSuccess;
      responseObject.message = data;
      return res.send(responseObject);
    });
  };

  /**
   * @description Handles the request and response for finding all notes
   * @param {Object} req
   * @param {Object} res
   */
   findAll = (req, res) => {
    noteService.findAll(req.body.userId, (err, data) => {
      if (err) {
      //  logger.error("Could not find Note", err);
      console.log("Could not find Note", err);
        responseObject = dtoObject.noteApiFailure;
        responseObject.message = err.message;
        return res.send(responseObject);
      }
     // logger.info(data);
     console.log("All Notes", data);
      responseObject = dtoObject.noteApiSuccess;
      responseObject.message = data;
      return res.send(responseObject);
    });
  };
}

module.exports = new NoteController();
