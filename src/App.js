import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" exact>
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blogDetail">
            <BlogDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
