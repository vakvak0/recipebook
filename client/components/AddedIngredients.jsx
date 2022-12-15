import React from "react";

export default function AddedIngredients(props) {
  return (
    <div className="ingredients">
      {props.addedIngredients &&
        props.addedIngredients.map((ingredient, index) => (
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
