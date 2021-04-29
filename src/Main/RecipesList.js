import React from "react";
import RecipeCard from "./RecipeCard";

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
            directions={recipe.direction.map((obj) => {
              return (
                <div>
                  <h4>{obj.name}</h4>
                  <p>{obj.text}</p>
                </div>
              );
            })}
          />
        );
      })}
    </div>
  );
}

export default RecipesList;
