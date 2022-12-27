
module.exports = app => {
    const pglayouts = require("../controllers/pglayouts.controller.js");
  
    let router = require("express").Router();
  
    // Create a new user
    router.post("/", pglayouts.create);
    
    // Retrieve a single user with id
    router.get("/:id", pglayouts.findOne);
  
    // Update a user with id
    router.put("/:id", pglayouts.update);
  
    // Delete a user with id
    router.delete("/:id", pglayouts.delete);
  
    app.use('/api/pgLayouts', router);
  };
  