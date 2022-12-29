
module.exports = app => {
    const forms = require("../controllers/forms.controller.js");
  
    let router = require("express").Router();
  
    // Create a new form
    router.post("/", forms.create);
    
    // Retrieve a single form with id
    router.get("/:id", forms.findOne);
  
    // Update a form with id
    router.put("/:id", forms.update);
  
    // Delete a form with id
    router.delete("/:id", forms.delete);
  
    app.use('/api/forms', router);
  };
  