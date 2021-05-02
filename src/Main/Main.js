import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";
import RecipeSpa from "./RecipeSpa";

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/:id" component={RecipeSpa} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}

export default Main;
