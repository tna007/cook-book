import React from "react";

function RecipeCard({ name, image, ingredients, directions, link }) {
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <img src={`assets/img/${image}`} alt={name} />
      <h3>Ingredients:</h3>
      <em>{ingredients}</em>
      <h3>{directions}</h3>
      <a href={link}>More</a>
    </div>
  );
}

export default RecipeCard;
