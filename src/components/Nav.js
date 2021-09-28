import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <Nav>
      <h2>My Life</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Nav;
