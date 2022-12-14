const recipes = require("../app/controllers/recipe.controller.js");
router = require("express").Router();

// Create a new Recipe
router.post("/", recipes.create);

// Retrieve all Recipes
router.get("/", recipes.findAll);

// Retrieve a single Recipe with recipeId
router.get("/:recipeId", recipes.findOne);

// Update a Recipe with recipeId
router.put("/:recipeId", recipes.update);

// Delete a Recipe with recipeId
router.delete("/:recipeId", recipes.delete);

module.exports = router;
