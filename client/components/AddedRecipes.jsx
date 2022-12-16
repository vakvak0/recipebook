import React from "react";
import RecipeService from "../src/services/Recipe.service";

export default function AddedRecipes(props) {
  return (
    <div className="recipes">
      {props.addedRecipes &&
        props.addedRecipes.map((recipe, index) => (
          <div className="recipeDiv" key={index}>
            <h3 className="added">{recipe.name}</h3>
          </div>
        ))}
    </div>
  );
}
