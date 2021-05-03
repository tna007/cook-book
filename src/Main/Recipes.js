import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search";
import RecipesList from "./RecipesList";

const Recipes = () => {
  const [recipesDefault, setRecipesDefault] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get("http://localhost:3001/recipes");
      const data = resp.data;
      setRecipesDefault(data);
      setSearchRecipe(data);
    };
    getRecipes();
  }, []);

  const handleSearch = (e) => {
    let searchInput = e.target.value;
    console.log("this is input", searchInput);
    const searchFiltered = recipesDefault.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log("this is searched filtered", searchFiltered);
    setSearchRecipe(searchFiltered);
  };

  return (
    <div>
      <Search search={handleSearch} />
      <section className="recipes">
        <RecipesList recipes={searchRecipe} />
      </section>
    </div>
  );
};

export default Recipes;
