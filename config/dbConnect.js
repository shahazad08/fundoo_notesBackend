/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js              
 * @descrition      : connects data base
 * @file            : dbConnect.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 7-Oct-2021
 * 
 **************************************************************************/

const mongoose = require('mongoose');
const dbConfig = require('./database.config');

// Connecting to the database
console.log("ENV String", dbConfig);
exports.dbConnection = () =>{

    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database")
        // logger.info("Successfully connected to the database");    
    }).catch(err => {
        console.log(err);
        //logger.error('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}