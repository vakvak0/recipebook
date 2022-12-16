import React, { useState, useEffect } from "react";
import RepiceDataService from "../src/services/Recipe.service";
import Recipes from "./Recipes";
import AddedRecipes from "./AddedRecipes";
import AddRecipe from "./AddRecipe";

export default function RepicesContainer(props) {
  const [recipes, setRecipes] = useState([{}]);
  const [editing, setEditing] = useState(false);
  const [addedRecipes, setAddedRecipes] = useState([]);
  const [deletedRecipes, setdeletedRecipes] = useState([]);

  /*----------------------
  Handling data from server
  -----------------------*/

  function loadList() {
    RepiceDataService.getAll()
      .then((response) => {
        setRecipes(response.data), console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function appendList() {
    RepiceDataService.create(addedRecipes)
      .then((response) => {
        console.log(response.data);
        setAddedRecipes([]);
        setRecipes([...recipes, ...addedRecipes]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function popList() {
    let idList = deletedRecipes.map((id) => id._id);
    RepiceDataService.delete(idList)
      .then((response) => {
        console.log(response.data);
        setdeletedRecipes([]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  /*--------------------
   Updating local state
  ---------------------*/

  function appendRecipe(ingredient) {
    if (ingredient.name && ingredient.amount && ingredient.unit) {
      setAddedRecipes([...addedRecipes, ingredient]);
    }
  }

  function popRecipe(index) {
    setdeletedRecipes([...deletedRecipes, recipes[index]]);
    setRecipes(recipes.filter((ingredient, i) => i !== index));
  }

  function cancelEdit() {
    setRecipes([...recipes, ...deletedRecipes]);
    setAddedRecipes([]);
    setdeletedRecipes([]);
    setEditing(false);
  }

  function addRecipe() {
    props.showBox(true);
    props.visibility("visible");
  }

  // load ingredients on start
  useEffect(() => {
    loadList();
  }, []);

  // run on editing change and update/delete/add to server if needed when editing goes false
  useEffect(() => {
    if (!editing && addedRecipes.length != 0) {
      appendList();
      console.log("addedIngredients: ", addedRecipes);
    }
    if (!editing && deletedRecipes.length != 0) {
      popList();
      console.log("deletedIngredients: ", deletedRecipes);
    }
  }, [editing]);

  return (
    <div className="content">
      <h2>Reseptit</h2>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Tallenna muutokset" : "Muokkaa reseptejä"}
      </button>
      <button
        onClick={() => cancelEdit()}
        className={editing ? "visible" : "hidden"}
      >
        Peruuta
      </button>
      <br />
      <button
        onClick={() => addRecipe()}
        className={"addRecipeButton " + (editing ? "visible" : "hidden")}
      >
        Lisää resepti
      </button>
      <AddedRecipes
        addedRecipes={addedRecipes}
        editing={editing}
        appendRecipe={(ingredient) => appendRecipe(ingredient)}
      />
      <Recipes
        recipes={recipes}
        editing={editing}
        visibility={props.visibility}
        popRecipe={(recipe) => popRecipe(recipe)}
        showBox={props.showBox}
      />
    </div>
  );
}
