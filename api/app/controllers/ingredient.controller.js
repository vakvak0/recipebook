const db = require("../models");
const Ingredient = db.ownedIngredients;

// Create and Save a new ingredient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const ingredient = new Ingredient({
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });

  // Save Tutorial in the database
  ingredient
    .save(ingredient)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ingredient.",
      });
    });
};

// Retrieve all ingredients from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  ingredient
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ingredients.",
      });
    });
};

// Find a single ingredient with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ingredient.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found ingredient with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving ingredient with id=" + id });
    });
};

// Update a ingredient by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Ingredient.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ingredient with id=${id}. Maybe ingredient was not found!`,
        });
      } else res.send({ message: "ingredient was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ingredient with id=" + id,
      });
    });
};

// Delete a ingredient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Ingredient.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ingredient with id=${id}. Maybe ingredient was not found!`,
        });
      } else {
        res.send({
          message: "ingredient was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ingredient with id=" + id,
      });
    });
};

// Delete all ingredients from the database.
exports.deleteAll = (req, res) => {
  res.send({ message: `DONT!` });
};
