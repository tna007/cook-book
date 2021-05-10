import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search";
import RecipesList from "./RecipesList";

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

  return (
    <div>
      <Search
        search={(e) => {
          setSearchRecipe(e.target.value);
        }}
      />
      <section className="recipes">
        <RecipesList recipes={searchFiltered} />
      </section>
    </div>
  );
};

export default Recipes;
