import React, { useState, useEffect } from "react";
import RecipeDataService from "../src/services/recipe.service";
import "./Recipes.css";

function Recipes(props) {
  const [recipes, setRecipes] = useState([{}]);

  function loadList() {
    RecipeDataService.getAll()
      .then((response) => {
        setRecipes(response.data), console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function showRecipe(recipe) {
    props.visibility("visible");
    props.showBox(recipe);
  }

  useEffect(() => {
    loadList();
  }, []);

  if (JSON.stringify(recipes) == "{}") return <div>Haetaan reseptejä</div>;
  return (
    <div className="recipes">
      {recipes &&
        recipes.map((recipe, index) => (
          <div className="recipeDiv" key={index}>
            <h3
              onClick={() => showRecipe(recipe)}
              className={props.editing ? "recipeItem cross" : "recipeItem egg"}
            >
              {recipe.name}
            </h3>
          </div>
        ))}
    </div>
  );
}

export default Recipes;
