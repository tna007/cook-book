import React from "react";
// import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navs() {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/recipes">Recipes</Link>
    //     </li>
    //     <li>
    //       <Link to="/addRecipe">Add Recipe</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
    <Nav>
      <NavItem>
        <LinkContainer to="/recipes">
          <NavLink>Recipes</NavLink>
        </LinkContainer>
      </NavItem>

      <NavItem>
        <LinkContainer to="/addRecipe">
          <NavLink>Add Recipe</NavLink>
        </LinkContainer>
      </NavItem>

      <NavItem>
        <LinkContainer to="/about">
          <NavLink>About</NavLink>
        </LinkContainer>
      </NavItem>
    </Nav>
  );
}

export default Navs;
