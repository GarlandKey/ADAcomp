
module.exports = app => {
    const layouts = require("../controllers/layouts.controller.js");
  
    let router = require("express").Router();
  
    // Create a new user
    router.post("/", layouts.create);
    
    // Retrieve a single user with id
    router.get("/:id", layouts.findOne);
  
    // Update a user with id
    router.put("/:id", layouts.update);
  
    // Delete a user with id
    router.delete("/:id", layouts.delete);
  
    app.use('/api/layouts', router);
  };
  