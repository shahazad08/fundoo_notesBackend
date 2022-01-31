
const noteModel = require("../models/note.model.js");

class NoteService {
  /**
   * @description Service layer function to create a note
   * @param {Object} body
   * @param {callback} callback
   * @returns err or data
   */
  createNote = (body, callback) => {
    noteModel.createNote(body.title, body.content,body.userId, (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };
}
module.exports = new NoteService();
