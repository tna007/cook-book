import React from "react";
import RecipeCard from "./RecipeCard";
// import Search from "./Search";

function RecipesList({ recipes }) {
  return (
    <div className="recipesList">
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            alt={recipe.name}
            ingredients={recipe.ingredients}
            directions={recipe.directions}
          />
        );
      })}
    </div>
  );
}

export default RecipesList;
