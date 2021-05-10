import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewRecipe() {
  // const [newRecipes, setNewRecipes] = useState([]);
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
    <div>
      <h2>Add New Recipe</h2>
      <Form onSubmit={sendData}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="difficulty">Difficulty</Form.Label>
          <Form.Control
            type="text"
            name="difficulty"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            onChange={updateInput}
          ></Form.Control>
        </Form.Group>

        {ingredients.map((item, i) => {
          return (
            <Form.Group key={i}>
              <Form.Label htmlFor="name">Ingredient</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => handleChange(e, i)}
              ></Form.Control>
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                onChange={(e) => handleChange(e, i)}
              ></Form.Control>
              {ingredients.length !== 1 && (
                <Button onClick={() => delIngredient(i)}>Remove</Button>
              )}
              {ingredients.length - 1 === i && (
                <Button onClick={addIngredient}>Add</Button>
              )}
            </Form.Group>
          );
        })}
        <p>Directions</p>
        {steps.map((item, i) => {
          return (
            <Form.Group key={i}>
              <Form.Label htmlFor="text">Step {i + 1}</Form.Label>
              <Form.Control
                type="text"
                name="text"
                onChange={(e) => handleChange(e, i)}
              ></Form.Control>
              {steps.length !== 1 && (
                <Button onClick={() => delStep(i)}>Remove</Button>
              )}
              {steps.length - 1 === i && <Button onClick={addStep}>Add</Button>}
            </Form.Group>
          );
        })}
        <Button type="submit">Submit</Button>
        <pre>{JSON.stringify(steps, null, 2)}</pre>
      </Form>
    </div>
  );
}

export default NewRecipe;
