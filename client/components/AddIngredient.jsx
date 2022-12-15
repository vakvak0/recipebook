import React, { useState } from "react";
import "./AddIngredient.css";

export default function AddIngredient(props) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [unit, setUnit] = useState("g");

  return (
    <div className={"addIngredient " + props.visibility}>
      <input
        onChange={(event) => setName(event.target.value)}
        id="name"
        type="text"
        placeholder="Raaka-aine"
      />
      <input
        onChange={(event) => setAmount(event.target.value)}
        id="amount"
        type="number"
        placeholder="Määrä"
      />
      <select onChange={(event) => setUnit(event.target.value)} id="unit">
        <option value="g">g</option>
        <option value="kg">kg</option>
        <option value="l">l</option>
        <option value="dl">dl</option>
        <option value="tl">tl</option>
        <option value="kpl">kpl</option>
      </select>
      <button
        className="addIngredientButton"
        onClick={() => props.appendIngredient({ name, amount, unit })}
      >
        Lisää
      </button>
    </div>
  );
}
