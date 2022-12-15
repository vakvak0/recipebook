import React from "react";
import "./Ingredients.css";

export default function Ingredients(props) {
  return (
    <div className="ingredients">
      {props.ingredients &&
        props.ingredients.map((ingredient, index) => (
          <div className="ingredientDiv" key={index}>
            <h3
              className={
                props.editing ? "ingredientOnEdit cross" : "ingredient egg"
              }
            >
              {ingredient.name} {ingredient.amount} {ingredient.unit}
            </h3>
          </div>
        ))}
    </div>
  );
}
