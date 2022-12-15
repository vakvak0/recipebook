import React, { Component } from "react";

export default class RenderShowbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"overlay " + this.props.visibility}>
        <div className="showbox">
          <h2>{this.props.showBox.name}</h2>
          {this.props.showBox.ingredients &&
            this.props.showBox.ingredients.map((ingredient, index) => (
              <div className="ingredientDiv" key={index}>
                <h4 className="ingredient">
                  {ingredient.name} {ingredient.amount} {ingredient.unit}
                </h4>
              </div>
            ))}
          <h3>Ohjeet</h3>
          <p>{this.props.showBox.instructions}</p>
          <button onClick={() => this.props.onVisibilityChange("hidden")}>
            Sulje
          </button>
        </div>
      </div>
    );
  }
}
