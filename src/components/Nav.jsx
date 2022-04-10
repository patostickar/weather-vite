import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </nav>
  );
}

export default Nav;
