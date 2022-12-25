const db = require("../models");
const userInfo = db.userInfo;

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName ||
        !req.body.lastName ||
        !req.body.email ||
        !req.body.password
        ) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a user
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      company: req.body.company
    });
  
    // Save user in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        User.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: `No user exists with id ${id}` });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: `Error retrieving user with id ${id}` });
          });
      };
};

// Update a user by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id ${id}. User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating user with id ${id}`
      });
    });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id ${id}. User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete user with id ${id}`
      });
    });
};
