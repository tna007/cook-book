import React from "react";

import Nav from "./Nav";

function Logo() {
  return <div className="logo">Logo</div>;
}

function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
