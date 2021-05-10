import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({
  name,
  image,
  difficulty,
  ingredients,
  directions,
  link,
}) {
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Difficuty: {difficulty}</h3>
      <em>{ingredients}</em>
      <h3>{directions}</h3>
      <Link to={`/${link}`}>More</Link>
    </div>
  );
}

export default RecipeCard;
