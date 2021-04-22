import React from "react";

function RecipesList({ recipes }) {
  return (
    <div className="recipesList">
      <h1>Recipes</h1>

      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={`assets/img/${recipe.image}`} alt={recipe.name} />

            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>

            <h3>Directions</h3>
            {recipe.direction.map((obj) => {
              return (
                <ul>
                  <li>{obj.name}</li>
                  <li>{obj.text}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default RecipesList;
