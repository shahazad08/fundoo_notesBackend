
const noteModel = require("../models/note.model.js");

class NoteService {
  /**
   * @description Service layer function to create a note
   * @param {Object} body
   * @param {callback} callback
   * @returns err or data
   */
  createNote = (body, callback) => {
    noteModel.createNote(body.title, body.content,body.userId, body.color,  (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };

  /**
   * @description Service layer function to find all note
   * @param {callback} callback
   * @returns err or data
   */
   findAll = (userId,callback) => {
    noteModel.findAll(userId,(err, data) => {
      return err ? callback(err, null) : callback(null, data);
    });
  };
}
module.exports = new NoteService();
