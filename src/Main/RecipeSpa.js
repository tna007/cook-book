import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function RecipeSpa() {
  const [recipe, setRecipe] = useState([]);
  const [directions, setDirections] = useState([]);
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
    };
    getRecipe();
    // }
  }, [id]);

  console.log("this is direction ", recipe);
  let recipeData;

  if (recipe) {
    let direction = directions.map((obj) => {
      return (
        <>
          <em>{obj.name}</em>
          <p>{obj.text}</p>
        </>
      );
    });

    recipeData = (
      <>
        <h2 key={recipe.id}>{recipe.name}</h2>
        <img src={`assets/img/${recipe.image}`} alt={recipe.name} />
        <h3>Ingredients</h3>
        <em>{recipe.ingredients}</em>
        <h3>Directions</h3>
        {direction}
        {/* <a href={recipe.link} target="_blank" rel="noreferrer">
          More
        </a> */}
        <button onClick={() => history.goBack()}>Back</button>
      </>
    );
  } else {
    recipeData = <p>Loading..</p>;
  }
  return <div>{recipeData}</div>;
}

export default RecipeSpa;
