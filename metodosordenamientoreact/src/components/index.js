import React, { Component } from 'react';
import CompareMethods from './compare';
import Inicio from './inicio';
import MetodosOrdenacion from './metodos';
import Developers from './developers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";    
const ComponentApp = () => {
  var data = null;
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">MENU</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="nav-link">
                Inicio
                </Link>
            </li>
            <li class="nav-item">
              <Link to="/compare" className="nav-link">
                Compare
                </Link>
            </li>
            <li class="nav-item">
              <Link to="/method" className="nav-link">
                Method
                </Link>
            </li>
            <li class="nav-item">
              <Link to="/developers" className="nav-link">
                Developers
                </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/compare">
          <h1 id="idh1"></h1>
          <CompareMethods />           
        </Route>
        <Route path="/method">
          <MetodosOrdenacion/>
              </Route>
        <Route path="/" exact>
          <Inicio/>
              </Route>
        <Route path="/developers">
          <Developers/>
        </Route>
      </Switch>
    </Router>
  );
}

export default ComponentApp; 