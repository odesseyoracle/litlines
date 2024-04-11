import React from "react";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="LitLines Logo" />
        <h1>LitLines</h1>
      </nav>
    </>
  );
};

export default Navbar;
