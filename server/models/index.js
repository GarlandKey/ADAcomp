const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_SERVER}/${process.env.MONGO_COLL}?retryWrites=true&w=majority`
console.log(mongoURI);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongoURI;
db.userInfo = require("./userInfo.js")(mongoose);

module.exports = db;
