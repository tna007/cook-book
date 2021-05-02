import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search";
import RecipesList from "./RecipesList";

const Recipes = () => {
  const [recipesDefault, setRecipesDefault] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState([]);
  const [input, setInput] = useState("");

  const searchHandler = (input) => {
    const inputFiltered = recipesDefault.filter((recipe) => {
      return recipe.name.toLowerCase().includes(input.toLowerCase());
    });
    console.log("this is input filtered", inputFiltered);
    setInput(input);
    setSearchRecipe(inputFiltered);
  };
  console.log("this is searched recipes", searchRecipe);

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get("http://localhost:3001/recipes");
      const data = resp.data;
      setRecipesDefault(data);
      // setSearchRecipe(data);
    };
    getRecipes();
  }, []);
  console.log("this is default list ", recipesDefault);

  return (
    <section className="recipes">
      <Search input={input} setKeyword={searchHandler} />
      <RecipesList recipes={searchRecipe} />
    </section>
  );
};
export default Recipes;
