import React, { Component } from "react";
import RecipeDataService from "../src/services/recipe.service";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.loadList = this.loadList.bind(this);
    this.state = {
      recipes: {},
    };
  }

  loadList() {
    RecipeDataService.getAll()
      .then((response) => {
        this.setState({
          recipes: response.data,
        }),
          console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.loadList();
  }

  showRecipe(recipe) {
    this.props.visibility("visible");
    this.props.showBox(recipe);
  }

  render() {
    let recipes = this.state.recipes;
    if (JSON.stringify(recipes) == "{}") return <div>Haetaan reseptejä</div>;
    return (
      <div className="recipes">
        {recipes &&
          recipes.map((recipe, index) => (
            <div className="recipeDiv" key={index}>
              {this.props.editing ? (
                <h3
                  onClick={() => this.showRecipe(recipe)}
                  className="recipeItem cross"
                >
                  {recipe.name}
                </h3>
              ) : (
                <h3
                  onClick={() => this.showRecipe(recipe)}
                  className="recipeItem egg"
                >
                  {recipe.name}
                </h3>
              )}
            </div>
          ))}
      </div>
    );
  }
}
