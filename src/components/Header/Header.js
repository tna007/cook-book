import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Navs from "./Navs";

function Header() {
  return (
    <header>
      <Navbar variant="light">
        <div className="container-fluid">
          <LinkContainer to="/">
            <NavbarBrand href="#">
              <img
                className="logo"
                src="./assets/img/original-recipe.png"
              ></img>
            </NavbarBrand>
          </LinkContainer>
          <Navs />
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
