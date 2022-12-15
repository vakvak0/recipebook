import Recipes from "./Recipes";
import React, { useState } from "react";

function RepicesContainer(props) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="content">
      <h2>Reseptit</h2>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Tallenna muutokset" : "Muokkaa reseptejä"}
      </button>
      <Recipes
        editing={editing}
        visibility={props.visibility}
        showBox={props.showBox}
      />
    </div>
  );
}

export default RepicesContainer;
