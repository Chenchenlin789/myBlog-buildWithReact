import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default Nav;
