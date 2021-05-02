import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesList({ recipes }) {
  return (
    <div className="recipesList">
      {recipes.map((recipe) => {
        if (recipes) {
          return (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              alt={recipe.name}
              ingredients={recipe.ingredients}
              link={recipe.id}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default RecipesList;
