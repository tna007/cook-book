import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
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
      <Container>
        <Row className="mb-3">
          <h2>{recipe.name}</h2>
        </Row>
        <Row className="mt-1 mb-3">
          <Col xs={7} md={4}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              className="mb-1"
              thumbnail
            />
          </Col>

          <Col xs={6} md={4} className="mt-1">
            <Row>
              <strong>
                <u className="lead">Ingredients</u>
              </strong>
              {ingredient}
            </Row>
            <Row>
              <em>Difficulty: {recipe.difficulty}</em>
            </Row>
          </Col>

          <Col className="mt-1">
            <strong>
              <u className="lead">Directions</u>
            </strong>
            {direction}
          </Col>
        </Row>

        <Button onClick={() => history.goBack()}>Back</Button>
      </Container>
    );
  } else {
    recipeData = <p>Loading..</p>;
  }
  return <div>{recipeData}</div>;
}

export default RecipeSpa;
