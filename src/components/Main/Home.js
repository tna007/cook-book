import React from "react";
import { Row, Jumbotron, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Jumbotron
      className="d-flex flex-column justify-content-center bd-highlight"
      fluid
    >
      <Row className="ms-5 mb-4">
        <Fade left>
          <h1>Cook - Eat - Repeat!</h1>
          <p>Thinking about what to cook today? You're at the right place.</p>
        </Fade>
      </Row>
      <Row className="ms-5">
        <Fade bottom>
          <p>
            <Link to="/recipes">
              <Button className="me-5" variant="outline-warning">
                Search recipe
              </Button>
            </Link>
            <Link to="/about">
              <Button className="ms-5" variant="outline-warning">
                Learn more
              </Button>
            </Link>
          </p>
        </Fade>
      </Row>
    </Jumbotron>
  );
};

export default Home;
