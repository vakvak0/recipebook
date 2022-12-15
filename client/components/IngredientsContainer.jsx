import IngredientDataService from "../src/services/Ingredient.service";
import React, { useState, useEffect } from "react";
import AddIngredient from "./AddIngredient";
import Ingredients from "./Ingredients";
import AddedIngredients from "./AddedIngredients";

export default function IngredientsContainer(props) {
  const [ingredients, setIngredients] = useState([{}]);
  const [editing, setEditing] = useState(false);
  const [addedIngredients, setAddedIngredients] = useState([]);
  const [deletedIngredients, setdeletedIngredients] = useState([]);

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

  function popList() {
    IngredientDataService.delete(deletedIngredients)
      .then((response) => {
        console.log(response.data);
        setdeletedIngredients([]);
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

  function popIngredient(index) {
    setdeletedIngredients([...deletedIngredients, ingredients[index]._id]);
    setIngredients(ingredients.filter((ingredient, i) => i !== index));
  }

  // run on start
  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    if (!editing && addedIngredients.length != 0) {
      appendList();
      console.log("addedIngredients: ", addedIngredients);
    }
    if (!editing && deletedIngredients.length != 0) {
      popList();
      console.log("deletedIngredients: ", deletedIngredients);
    }
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
      <Ingredients
        ingredients={ingredients}
        editing={editing}
        popIngredient={(index) => popIngredient(index)}
      />
    </div>
  );
}
