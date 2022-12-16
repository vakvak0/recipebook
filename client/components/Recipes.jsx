import React, { useState, useEffect } from "react";
import "./Recipes.css";

export default function Recipes(props) {
  const [recipes, setRecipes] = useState([{}]);

  function showRecipe(recipe) {
    props.visibility("visible");
    props.showBox(recipe);
  }

  if (JSON.stringify(recipes) == "{}") return <div>Haetaan reseptejä</div>;
  return (
    <div className="recipes">
      {props.recipes &&
        props.recipes.map((recipe, index) => (
          <div className="recipeDiv" key={index}>
            {props.editing && (
              <h3 className="delete" onClick={() => props.popRecipe(index)}>
                Poista
              </h3>
            )}
            <h3
              onClick={() => showRecipe(recipe, { editable: false })}
              className={props.editing ? "recipeItem edit" : "recipeItem egg"}
            >
              {recipe.name}
            </h3>
          </div>
        ))}
    </div>
  );
}
