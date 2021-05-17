import React from "react";
import { Card } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function RecipeCard({ name, image, difficulty, ingredients, directions, id }) {
  let { url } = useRouteMatch();
  return (
    <Card style={{ width: "18rem" }} text="dark" className="recipe">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Difficuty: <em>{difficulty}</em>
        </Card.Text>
        <Card.Text>
          <em>{ingredients}</em>
        </Card.Text>
        <Card.Text>{directions}</Card.Text>
        <Link to={`${url}/${id}`}>More</Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
