import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Recipes from "./Recipe/Recipes";
import NewRecipe from "./Recipe/NewRecipe";

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/addRecipe" component={NewRecipe} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}

export default Main;
