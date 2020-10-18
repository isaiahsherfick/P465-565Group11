import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import ExplorePage from "views/ExplorePage/explorePage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MapPage from 'views/MapPage/MapPage.js'
import Header from "./Header.js";
import Explore from "../src/views/ExplorePage/Explore.js";




var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header />
    <Switch>
      <Route exact path="/map-page" component={MapPage} />
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/components" component={Components} />
      <Route exact  path="/" component={LoginPage} />
      <Route exact path="/explore" component={Explore}/>
      {/* <Route path="/explore-page" component={ExplorePage} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
