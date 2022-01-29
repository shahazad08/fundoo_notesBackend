/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js              
 * @descrition      : configures data base
 * @file            : database.config.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 * 
 **************************************************************************/
const dotenv = require("dotenv");

dotenv.config();

console.log("URI", process.env.MONGO_URL);
module.exports = {
    url: process.env.MONGO_URL
}