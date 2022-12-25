const mongoURI = process.env.MONGO_URI;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongoURI;
db.users = require("./users.js")(mongoose);

module.exports = db;
