import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import UseStateExample from './hooks/UseStateExample';
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div style={{height: '100%'}}>
        <nav>
          <ul>
            <li>
              <NavLink to="/useState">useState</NavLink>
            </li>
            <li>
              <NavLink to="/useEffect">useEffect</NavLink>
              </li>
            <li>
              <NavLink to="/useContext">useContext</NavLink>
              </li>
            <li>
              <NavLink to="/customHook">customHook</NavLink>
              </li>
          </ul>
        </nav>

        <div className="content">
          <Route path="/useState" exact component={UseState} />
          <Route path="/useEffect" exact component={UseEffect} />
          <Route path="/useContext" exact component={UseContext} />
          <Route path="/customHook" exact component={CustomHook} />
        </div>
      </div>
    </Router>
  );
}

function UseState() {
  return <UseStateExample />;
}

function UseEffect() {
  return <h2>useEffect</h2>;
}

function UseContext() {
  return <h2>useContext</h2>;
}

function CustomHook() {
  return <h2>customHook</h2>;
}

export default AppRouter;