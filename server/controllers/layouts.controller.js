const db = require("../../server/models");
const Layout = db.pgLayouts;

// Create and Save a page layout
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a page layout
  const layout = new Layout({
    user: req.body.user,
    isVerticalLetterhead: req.body.isVerticalLetterhead,
    isHeaderImage: req.body.isHeaderImage,
    headerImageLocation: req.body.headerImageLocation,
    logoLocation: req.body.logoLocation,
    logoCoordsX: req.body.logoCoordsX,
    logoCoordsY: req.body.logoCoordsY,
    companyCoordsX: req.body.companyCoordsX,
    companyCoordsY: req.body.companyCoordsY,
    addressCoordsX: req.body.addressCoordsX,
    addressCoordsY: req.body.addressCoordsY,
    phoneCoordsX: req.body.phoneCoordsX,
    phoneCoordsY: req.body.phoneCoordsY,
    emailCoordsX: req.body.emailCoordsX,
    emailCoordsY: req.body.emailCoordsY,
    otherCoordsX: req.body.otherCoordsX,
    otherCoordsY: req.body.otherCoordsY,
    signatureGreeting: req.body.signatureGreeting
  });

  // Save page layout in the database
  layout
    .save(layout)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the page layout."
      });
    });
};

// Find a single page layout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Layout.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: `No page layouts exists with id ${id}` });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving page layout with id ${id}` });
    });
};

// Update a page layout by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Layout.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update page layout with id ${id}. Page Layout was not found!`
        });
      } else res.send({ message: "Page layout was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating page layout with id ${id}`
      });
    });
};

// Delete a page layout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Layout.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete page layout with id ${id}. Page layout was not found!`
        });
      } else {
        res.send({
          message: "Page layout was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete page layout with id ${id}`
      });
    });
};
