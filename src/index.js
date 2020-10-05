import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MapPage from 'views/MapPage/MapPage.js'
//authenticated routing
import ProtectedRoute from './ProtectedRoute';
import {isAutheticated} from './views/LoginPage/LoginForm.js';


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/map-page" component={MapPage}  />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);