import IngredientDataService from "../src/services/Ingredient.service";
import React, { useState, useEffect } from "react";
import AddIngredient from "../components/AddIngredient";

function Ingredients(props) {
  const [ingredients, setIngredients] = useState([{}]);
  function loadList() {
    IngredientDataService.getAll()
      .then((response) => {
        setIngredients(response.data), console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // run on start
  useEffect(() => {
    loadList();
  }, []);

  const [editing, setEditing] = useState(false);

  return (
    <div className="content">
      <h2>Raaka-aineet</h2>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Tallenna muutokset" : "Muokkaa raaka-aineita"}
      </button>
      <AddIngredient visibility={editing ? "visible" : "hidden"} />
      <div className="ingredients">
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <div className="ingredientDiv" key={index}>
              <h3
                className={
                  editing ? "ingredientOnEdit cross" : "ingredient egg"
                }
              >
                {ingredient.name} {ingredient.amount} {ingredient.unit}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ingredients;
