import React from "react";
import { Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { HashRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">React Router Tutorial</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
