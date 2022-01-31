
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
  createNote = (title, content, userId, color,callback) => {
    const note = new myNote({
      title: title,
      content: content,
      userId: userId,
      isTrash: false,
      color: color,
      image: "",
    });
    return note.save((err, data) => {
        console.log("Data", data.color);
      return err ? callback(err, null) : callback(null, data);
    });
  };

    /**
   * @description finds all notes present in data base
   * @param {callback} callback
   * @returns err or data
   */
     findAll = (userId, callback) => {
        return myNote
          .find({ userId: userId })
          .populate({
            path: "userId",
            select: ["firstName", "lastName", "email"],
          })
          .exec((error, data) => {
            return error ? callback(error, null) : callback(null, data);
          });
      };
}
module.exports = new NoteModel();
