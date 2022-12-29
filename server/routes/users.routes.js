
module.exports = app => {
  const users = require("../controllers/users.controller.js");

  let router = require("express").Router();

  // Create a new user
  router.post("/", users.create);
  
  // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // Update a user with id
  router.put("/:id", users.update);

  // Delete a user with id
  router.delete("/:id", users.delete);

  app.use('/api/users', router);
};
  