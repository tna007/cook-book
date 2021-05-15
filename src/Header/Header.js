import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Navs from "./Navs";

function Header() {
  return (
    <header>
      <Navbar navbar="light" variant="light">
        <div className="container-fluid">
          <LinkContainer to="/">
            <NavbarBrand href="#">Logo</NavbarBrand>
          </LinkContainer>
          <Navs />
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
