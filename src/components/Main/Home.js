import React from "react";
import { Row, Container, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Home = () => {
  const heroStyle = {
    backgroundImage: 'url("/assets/img/flour.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    margin: 0,
    padding: 0,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "calc(-50vw + 50%)", // Override container margins
    // marginRight: "calc(-50vw + 50%)", // Override container margins
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Slightly darker overlay
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center", // Center the content
    maxWidth: "800px",
    padding: "2rem",
  };
  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <Container style={contentStyle}>
        <Row className="ms-4 mb-4">
          <Fade direction="left">
            <h1>Cook - Eat - Repeat!</h1>
            <p>Thinking about what to cook today? You're at the right place.</p>
          </Fade>
        </Row>
        <Row className="ms-4">
          <Fade direction="bottom">
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
      </Container>
    </div>
  );
};

export default Home;
