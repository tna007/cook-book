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

  useEffect(
    () => {
      // if (!recipe) {
      const getRecipe = async () => {
        const resp = await axios.get(
          "http://just-cook.herokuapp.com/recipes/" + id
        );
        const data = resp.data;
        console.log("this is spa ", data);
        setRecipe(data);
        setDirections(data.direction);
        setIngredients(data.ingredients);
      };
      getRecipe();
      // }
    },
    [id],
    [recipe]
  );

  console.log("this is direction ", recipe);
  let recipeData;

  if (recipe) {
    let direction = directions.map((obj, i) => {
      return (
        obj.text !== "" && (
          <div key={obj.step}>
            <em>Step {i + 1}</em>
            <p>{obj.text}</p>
          </div>
        )
      );
    });

    let ingredient = ingredients.map((item) => {
      return (
        <div key={item.ingredientName}>
          <p>
            {item.amount} {item.ingredientName}
          </p>
        </div>
      );
    });
    recipeData = (
      <Container className="mt-5 mb-5">
        <Row className="mb-3">
          <h2>{recipe.name}</h2>
        </Row>
        <Row className="mt-1 mb-3">
          <Col>
            <Image
              src={recipe.image}
              alt={recipe.name}
              className="mb-1"
              thumbnail
            />
          </Col>

          <Col className="ms-3">
            <Row>
              <strong className="mb-2">
                <u className="lead">Ingredients</u>
              </strong>
              <p className="mb-2">{ingredient}</p>
            </Row>
            <Row>
              <em>Difficulty: {recipe.difficulty}</em>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>
              <u className="lead">Directions</u>
            </strong>
            <p className="mt-4 mb-5">{direction}</p>
          </Col>
        </Row>

        <Button variant="info" onClick={() => history.goBack()}>
          Back
        </Button>
      </Container>
    );
  } else {
    recipeData = <p>Loading..</p>;
  }
  return <div>{recipeData}</div>;
}

export default RecipeSpa;
