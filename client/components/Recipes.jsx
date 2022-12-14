import RecipeDataService from "../src/services/recipe.service";
import React, { Component } from "react";

export default class Repices extends Component {
  constructor(props) {
    super(props);
    this.loadList = this.loadList.bind(this);

    this.state = {
      recipes: [{}],
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

  render() {
    let { recipes } = this.state;
    return (
      <div className="content">
        <h2>Reseptit</h2>
        <button onClick={this.loadList}>Muokkaa reseptejä</button>
        <div className="recipes">
          {recipes &&
            recipes.map((recipe, index) => (
              <div className="recipeDiv" key={index}>
                {this.state.editing ? (
                  <h3
                    onClick={() =>
                      this.props.showBox(recipe, { visibility: "visible" })
                    }
                    className="recipeItem cross"
                  >
                    {recipe.name}
                  </h3>
                ) : (
                  <h3
                    onClick={() =>
                      this.props.showBox(recipe, { visibility: "visible" })
                    }
                    className="recipeItem egg"
                  >
                    {recipe.name}
                  </h3>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
