import React from "react";
import "./RenderShowbox.css";

function RenderShowbox(props) {
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
export default RenderShowbox;
