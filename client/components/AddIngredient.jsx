import React from "react";

export default function AddIngredient(props) {
  return (
    <div className={"addIngredient " + props.visibility}>
      <input id="name" type="text" placeholder="Raaka-aine" />
      <input id="amount" type="number" placeholder="Määrä" />
      <select id="unit">
        <option value="g">g</option>
        <option value="kg">kg</option>
        <option value="l">l</option>
        <option value="dl">dl</option>
        <option value="tl">tl</option>
        <option value="kpl">kpl</option>
      </select>
    </div>
  );
}
