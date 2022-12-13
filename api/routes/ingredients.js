module.exports = (app) => {
  const recipes = require("../controllers/ingredients.controller.js");

  // Create a new Ingredient
  app.post("/ingredients", recipes.createIngredient);

  // Retrieve all Ingredients
  app.get("/ingredients", recipes.findAllIngredients);

  // Retrieve a single Ingredient with ingredientId
  app.get("/ingredients/:ingredientId", recipes.findOneIngredient);

  // Update a Ingredient with ingredientId
  app.put("/ingredients/:ingredientId", recipes.updateIngredient);

  // Delete a Ingredient with ingredientId
  app.delete("/ingredients/:ingredientId", recipes.deleteIngredient);
};
