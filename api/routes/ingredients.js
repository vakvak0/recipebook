const ingredients = require("../app/controllers/ingredient.controller.js");
router = require("express").Router();

// Create a new Ingredient
router.post("/", ingredients.create);

// Retrieve all Ingredients
router.get("/", ingredients.findAll);

// Retrieve a single Ingredient with ingredientId
router.get("/:ingredientId", ingredients.findOne);

// Update a Ingredient with ingredientId
router.put("/:ingredientId", ingredients.update);

// Delete a Ingredient with ingredientId
router.delete("/:ingredientId", ingredients.delete);

module.exports = router;
