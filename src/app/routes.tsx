import * as React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./about/About";
import Categories from "./categories/Categories";
import Home from "./home/Home";

export const routePaths = {
  Home: "/",
  Categories: "/categories",
  About: "/about"
};

const Routes = (
  <Switch>
    <Route path={routePaths.Home} exact={true} component={Home} />
    <Route path={routePaths.Categories} component={Categories} />
    <Route path={routePaths.About} component={About} />
  </Switch>
);

export default Routes;