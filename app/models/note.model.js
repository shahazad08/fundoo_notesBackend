
const mongoose = require("mongoose");
//const { promisify } = require("util");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isTrash: Boolean,
    color: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const myNote = mongoose.model("Note", NoteSchema);

class NoteModel {
  /**
   * @description creates a note and saves it in database
   * @param {string} title
   * @param {string} content
   * @param {callback} callback
   * @returns err or data
   */
  createNote = (title, content, userId, callback) => {
    const note = new myNote({
      title: title,
      content: content,
      userId: userId,
      isTrash: false,
      color: "white",
      image: "",
    });
    return note.save((err, data) => {
        console.log("Data", data.color);
      return err ? callback(err, null) : callback(null, data);
    });
  };
}
module.exports = new NoteModel();
