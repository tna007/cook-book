import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function NewRecipe() {
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    image: "",
    ingredients: [],
    direction: [],
  });

  const updateInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [ingredients, setIngredients] = useState([
    { name: "test", amount: "test" },
  ]);
  const [steps, setSteps] = useState([{ step: 1, text: "ab" }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "text") {
      const list = [...steps];
      list[index][name] = value;
      setSteps(list);
      setInput({ ...input, direction: steps });
    } else {
      const list = [...ingredients];
      list[index][name] = value;
      setIngredients(list);
      setInput({ ...input, ingredients: ingredients });
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  };
  const addStep = () => {
    setSteps([...steps, { step: steps.length + 1, text: "" }]);
  };

  const delIngredient = (index) => {
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };
  const delStep = (i) => {
    const list = [...steps];
    list.splice(i, 1);
    setSteps(list);
  };

  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/recipes", input)
      .then(() => window.location.reload());
  };

  return (
    <div className="newRecipe">
      <h2>Add New Recipe</h2>
      <Form onSubmit={sendData}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            className="mb-2"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="difficulty" className="mb-3">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            type="text"
            name="difficulty"
            className="mb-2"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Image(URL)</Form.Label>
          <Form.Control
            type="text"
            name="image"
            className="mb-2"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>

        {ingredients.map((item, i) => {
          return (
            <Form.Group key={i} controlId="ingredient" className="mb-3">
              <Row className="align-items-end">
                <Col xs="auto">
                  <Form.Label>Ingredient</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="mb-2"
                    onChange={(e) => handleChange(e, i)}
                  ></Form.Control>
                </Col>

                <Col xs="auto">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    name="amount"
                    className="mb-2"
                    onChange={(e) => handleChange(e, i)}
                  ></Form.Control>
                </Col>

                <Col className="mb-2">
                  {ingredients.length !== 1 && (
                    <Button
                      variant="outline-danger"
                      onClick={() => delIngredient(i)}
                    >
                      Remove
                    </Button>
                  )}
                </Col>
                <Col className="mb-2">
                  {ingredients.length - 1 === i && (
                    <Button variant="outline-success" onClick={addIngredient}>
                      Add
                    </Button>
                  )}
                </Col>
              </Row>
            </Form.Group>
          );
        })}
        <p>Directions</p>
        {steps.map((item, i) => {
          return (
            <Form.Group key={i}>
              <Form.Label>Step {i + 1}</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                className="mb-2"
                onChange={(e) => handleChange(e, i)}
              ></Form.Control>

              <Row className="align-items-end">
                <Col xs="auto" className="mb-3">
                  {steps.length !== 1 && (
                    <Button variant="outline-danger" onClick={() => delStep(i)}>
                      Remove
                    </Button>
                  )}
                </Col>
                <Col xs="auto" className="mb-3">
                  {steps.length - 1 === i && (
                    <Button variant="outline-success" onClick={addStep}>
                      Add
                    </Button>
                  )}
                </Col>
              </Row>
            </Form.Group>
          );
        })}

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewRecipe;
