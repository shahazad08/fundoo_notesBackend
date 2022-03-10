/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : label model creates label schema and performs db operation
 * @file            : label.model.js
 * @author          : Shaikh M. Shahazad
 * @version         : 1.0
 * @since           : 10-3-2021
 *
 **************************************************************************/

const mongoose = require("mongoose");
const LabelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const myLabel = mongoose.model("Label", LabelSchema);


class LabelModel {
    /**
     * @description creates a label and saves it in database
     * @param {string} title
     * @returns err or data
     */
    createLabel = (title, userId) => {
      const label = new myLabel({
        title: title,
        userId: userId,
      });
      try {
        const data = label.save();
        return data;
      } catch (error) {
        throw error;
      }
    };


/**
   * @description finds all labels present in data base
   * @returns err or data
   */
 findAll = async (userId) => {
  try {
    const data = await myLabel
      .find({ userId: userId })
      .populate({
        path: "userId",
        select: ["firstName", "lastName", "age", "email"],
      })
      .exec();
    return data;
  } catch (error) {
    throw error;
  }
};

}


module.exports = new LabelModel();