import Recipes from "./Recipes";
import React, { Component } from "react";

export default class RepicesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  render() {
    return (
      <div className="content">
        <h2>Reseptit</h2>
        <button onClick={() => this.setState({ editing: !this.state.editing })}>
          {this.state.editing ? "Tallenna muutokset" : "Muokkaa reseptejä"}
        </button>
        <Recipes
          editing={this.state.editing}
          visibility={this.props.visibility}
          showBox={this.props.showBox}
        />
      </div>
    );
  }
}
