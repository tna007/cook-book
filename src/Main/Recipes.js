import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search";
import RecipesList from "./RecipesList";

const Recipes = () => {
  const [recipesDefault, setRecipesDefault] = useState([]);
  // const [searchRecipe, setSearchRecipe] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get("http://localhost:3001/recipes");
      const data = resp.data;
      setRecipesDefault(data);
      // setSearchRecipe(data);
    };
    getRecipes();
  }, []);

  console.log("this is all recipes by default ", recipesDefault);
  // const searchHandler = async (input) => {
  //   const inputFiltered = recipesDefault.filter((recipe) => {
  //     return recipe.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setInput(input);
  //   setSearchRecipe(inputFiltered);
  // };

  return (
    <section className="recipes">
      {/* <p>{searchRecipe}</p> */}
      <Search />
      <RecipesList recipes={recipesDefault} />
    </section>
  );
};
export default Recipes;
