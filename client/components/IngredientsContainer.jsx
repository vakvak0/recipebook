import IngredientDataService from "../src/services/Ingredient.service";
import React, { useState, useEffect } from "react";
import AddIngredient from "./AddIngredient";
import Ingredients from "./Ingredients";
import AddedIngredients from "./AddedIngredients";

export default function IngredientsContainer(props) {
  const [ingredients, setIngredients] = useState([{}]);
  const [editing, setEditing] = useState(false);
  const [addedIngredients, setAddedIngredients] = useState([]);

  function loadList() {
    IngredientDataService.getAll()
      .then((response) => {
        setIngredients(response.data), console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function appendList() {
    IngredientDataService.create(addedIngredients)
      .then((response) => {
        console.log(response.data);
        setAddedIngredients([]);
        setIngredients([...ingredients, ...addedIngredients]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function appendIngredient(ingredient) {
    if (ingredient.name && ingredient.amount && ingredient.unit) {
      setAddedIngredients([...addedIngredients, ingredient]);
    }
  }

  // run on start
  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    if (editing || addedIngredients.length == 0) {
      return;
    }
    console.log("addedIngredients: ", addedIngredients);
    appendList(addedIngredients);
  }, [editing]);

  return (
    <div className="content">
      <h2>Raaka-aineet</h2>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Tallenna muutokset" : "Muokkaa raaka-aineita"}
      </button>
      <AddedIngredients addedIngredients={addedIngredients} editing={editing} />
      <AddIngredient
        visibility={editing ? "visible" : "hidden"}
        appendIngredient={(ingredient) => appendIngredient(ingredient)}
      />
      <Ingredients ingredients={ingredients} editing={editing} />
    </div>
  );
}
