import IngredientDataService from "../services/Ingredient.service";
import React, { Component } from "react";
export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.loadList = this.loadList.bind(this);

    this.state = {
      ingredients: [{}],
      editing: false,
    };
  }

  loadList() {
    IngredientDataService.getAll()
      .then((response) => {
        this.setState({
          ingredients: response.data,
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

  render() {
    let { ingredients } = this.state;
    return (
      <div className="content">
        <h2>Raaka-aineet</h2>
        <button onClick={this.loadList}>Muokkaa Raaka-aineita</button>
        <div className="ingredients">
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <div className="recipeDiv" key={index}>
                {this.state.editing ? (
                  <h3 className="ingredient cross">
                    {" "}
                    {ingredient.name} {ingredient.amount} {ingredient.unit}
                  </h3>
                ) : (
                  <h3 className="ingredient egg">
                    {ingredient.name} {ingredient.amount} {ingredient.unit}
                  </h3>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
