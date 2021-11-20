import config = require("./index")

const mongoose = require("mongoose")

const dbConn =config.dbUrl
module.exports = mongoose.connect(dbConn)