const db = require("../models");
const Form = db.forms;

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a form
  const form = new Form({
    priority: req.body.priority,
    category: req.body.category,
    num: req.body.num,
    title: req.body.title,
    description: req.body.description,
    imgLocation: req.body.imgLocation,
    isComp: req.body.isComp,
    isMeasurement: req.body.isMeasurement,
    measurement: req.body.measurement,
    hasPic: req.body.hasPic,
    picLocation: req.body.picLocation,
    suggestionLocation: req.body.suggestionLocation,
    comment: req.body.comment
  });

  // Save form in the database
  form
    .save(form)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the form."
      });
    });
};

// Find a form user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Form.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: `No form exists with id ${id}` });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving form with id ${id}` });
    });
};

// Update a form by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Form.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update form with id ${id}. Form was not found!`
        });
      } else res.send({ message: "Form was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating form with id ${id}`
      });
    });
};

// Delete a form with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Form.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete form with id ${id}. Form was not found!`
        });
      } else {
        res.send({
          message: "Form was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete form with id ${id}`
      });
    });
};
