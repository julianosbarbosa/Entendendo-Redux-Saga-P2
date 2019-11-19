import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Footer from "../components/Footer"

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact to="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
