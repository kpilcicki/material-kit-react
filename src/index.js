import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import OfferPage from "views/OfferPage/OfferPage.js";
import InternetPage from "views/InternetPage/InternetPage";
import PhonePage from "views/PhonePage/PhonePage";
import TvPage from "views/TvPage/TvPage";
import ScrollToTop from "./components/Helpers/ScrollToTop";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ScrollToTop />
    <Switch>
      <Route path="/landing-page" component={Components} />
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/offer-page" component={OfferPage} />
      <Route path="/internet-page" component={InternetPage} />
      <Route path="/phone-page" component={PhonePage} />
      <Route path="/tv-page" component={TvPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
