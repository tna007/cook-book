import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesList({ recipes }) {
  return (
    <div className="recipesList">
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        if (recipes) {
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
        }
        return null;
      })}
    </div>
  );
}

export default RecipesList;
