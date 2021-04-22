import React, { Component } from "react";

import Search from "./Search";
import RecipesList from "./RecipesList";

class Recipes extends Component {
  state = {
    searchInput: "",
    recipes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        this.setState({
          recipes: json,
        });
        console.log(this.state.recipes);
      });
  }
  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  render() {
    return (
      <section className="recipes">
        <Search search={this.searchHandler} />
        <p>{this.state.searchInput}</p>
        <RecipesList recipes={this.state.recipes} />
      </section>
    );
  }
}

export default Recipes;
