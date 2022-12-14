import React, { Component } from "react";

export default class RenderShowbox extends Component {
  constructor(props) {
    super(props);
    this.clearShowbox = this.clearShowbox.bind(this);
    this.isHidden = this.isHidden.bind(this);
  }

  clearShowbox = () => {
    this.props.setShowBox(({}.visibility = "hidden"));
  };

  isHidden = () => {
    if (this.props.showBox != "hidden") {
      this.hidden = "visible";
    } else {
      this.hidden = "hidden";
    }
  };

  render() {
    this.isHidden();
    return (
      <div className={"overlay " + this.hidden}>
        <div className="showbox">
          <h2>{this.props.showBox.name}</h2>
          {this.props.showBox.ingredients &&
            this.props.showBox.ingredients.map((ingredient, index) => (
              <div className="ingredientDiv" key={index}>
                <h4 className="ingredient">
                  {ingredient.name}
                  {ingredient.amount}
                  {ingredient.unit}
                </h4>
              </div>
            ))}
          <h3>Ohjeet</h3>
          <p>{this.props.showBox.instructions}</p>
          <button onClick={this.clearShowbox}>Sulje</button>
        </div>
      </div>
    );
  }
}
