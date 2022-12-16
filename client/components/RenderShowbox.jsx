import React, { useState } from "react";
import "./RenderShowbox.css";
import AddIngredient from "./AddIngredient";
import AddedIngredients from "./AddedIngredients";

function RenderShowbox(props) {
  const [addedIngredients, setAddedIngredients] = useState([]);

  function appendIngredient(ingredient) {
    if (ingredient.name && ingredient.amount && ingredient.unit) {
      setAddedIngredients([...addedIngredients, ingredient]);
    }
  }

  function cancelAdd() {
    props.onVisibilityChange("hidden");
    setAddedIngredients([]);
  }

  if (props.showBox.editable) {
    return (
      <div className={"overlay " + props.visibility}>
        <div className="showbox">
          <h2>Lisää resepti</h2>
          <input type="text" id="recipeName" placeholder="Nimi" />
          <AddedIngredients addedIngredients={addedIngredients} />
          <AddIngredient
            appendIngredient={(ingredient) => appendIngredient(ingredient)}
          />

          <h3>Ohjeet</h3>
          <textarea
            id="instructions"
            rows="4"
            cols="50"
            placeholder="Ohjeet tähän"
          />
          <br />
          <button onClick={() => cancelAdd()}>Peruuta</button>
          <button onClick={() => props.saveRecipe("hidden")}>Tallenna</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"overlay " + props.visibility}>
        <div className="showbox">
          <h2>{props.showBox.name}</h2>
          {props.showBox.ingredients &&
            props.showBox.ingredients.map((ingredient, index) => (
              <div className="ingredientDiv" key={index}>
                <h4 className="ingredient">
                  {ingredient.name} {ingredient.amount} {ingredient.unit}
                </h4>
              </div>
            ))}
          <h3>Ohjeet</h3>

          <p>{props.showBox.instructions}</p>

          <button onClick={() => props.onVisibilityChange("hidden")}>
            Sulje
          </button>
        </div>
      </div>
    );
  }
}
export default RenderShowbox;
