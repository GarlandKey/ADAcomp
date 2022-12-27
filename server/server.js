const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "config/.env" });
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models/index.js");
let corsOptions = {
  origin: `${process.env.MONGO_SERVER}`
};

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: `Welcome to ADAcomp!` });
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});