import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function RecipeSpa() {
  const [recipe, setRecipe] = useState([]);
  const [directions, setDirections] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    // if (!recipe) {
    const getRecipe = async () => {
      const resp = await axios.get("http://localhost:3001/recipes/" + id);
      const data = resp.data;
      console.log("this is spa ", data);
      setRecipe(data);
      setDirections(data.direction);
      setIngredients(data.ingredients);
    };
    getRecipe();
    // }
  }, [id]);

  console.log("this is direction ", recipe);
  let recipeData;

  if (recipe) {
    let direction = directions.map((obj, i) => {
      return (
        <div key={obj.step}>
          <em>Step {i + 1}</em>
          <p>{obj.text}</p>
        </div>
      );
    });

    let ingredient = ingredients.map((item) => {
      return (
        <div key={item.name}>
          <p>
            {item.amount} {item.name}
          </p>
        </div>
      );
    });
    recipeData = (
      <>
        <h2>{recipe.name}</h2>
        <h3>Difficulty: {recipe.difficulty}</h3>
        <img src={recipe.image} alt={recipe.name} />
        <h3>Ingredients</h3>
        {ingredient}
        <h3>Directions</h3>
        {direction}
        <button onClick={() => history.goBack()}>Back</button>
      </>
    );
  } else {
    recipeData = <p>Loading..</p>;
  }
  return <div>{recipeData}</div>;
}

export default RecipeSpa;
