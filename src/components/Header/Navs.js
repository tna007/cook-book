import React from "react";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

function Navs() {
  return (
    <Nav>
      <NavItem>
        <IndexLinkContainer to="/">
          <NavLink>Home</NavLink>
        </IndexLinkContainer>
      </NavItem>

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
