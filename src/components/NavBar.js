import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav">
        <Link className="nav" to="/">
          Home
        </Link>
      </li>
      <li className="nav">
        <Link className="nav" to="/about">
          About Us
        </Link>
      </li>
      <li className="nav">
        <Link className="nav" to="/connect">
          Connect
        </Link>
      </li>
      <li className="nav">
        <Link className="nav" to="/points">
          Points
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
