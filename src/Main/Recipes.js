import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search";
import RecipesList from "./RecipesList";
import RecipeSpa from "./RecipeSpa";

import { Route, Switch, useRouteMatch } from "react-router";
import { Container, Figure } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const Recipes = () => {
  const [recipesDefault, setRecipesDefault] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get("http://localhost:3001/recipes");
      const data = resp.data;
      setRecipesDefault(data);
    };
    getRecipes();
  }, [searchRecipe]);

  const searchFiltered = recipesDefault.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase());
  });

  let { url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={url} exact>
          <Container fluid className="text-center mx-auto">
            <Figure>
              <blockquote className="blockquote">
                <p>In cooking, you’ve got to have a what-the-hell attitude.</p>
              </blockquote>
              <FigureCaption className="blockquote-footer">
                <cite title="source">Julia Child</cite>
              </FigureCaption>
            </Figure>
          </Container>

          <Search
            search={(e) => {
              setSearchRecipe(e.target.value);
            }}
          />

          <section className="recipes">
            <RecipesList recipes={searchFiltered} />
          </section>
        </Route>
        <Route path={`${url}/:id`}>
          <RecipeSpa />
        </Route>
      </Switch>
    </div>
  );
};

export default Recipes;
