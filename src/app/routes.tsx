import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "./categories/Categories";
import Home from "./home/Home";

export const routePaths = {
  Home: "/",
  Categories: "/categories"
};

const Routes = (
  <Switch>
    <Route path={routePaths.Home} exact={true} component={Home} />
    <Route path={routePaths.Categories} component={Categories} />
  </Switch>
);

export default Routes;