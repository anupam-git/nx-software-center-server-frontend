import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "./routes";
import Sidenav from "./sidenav/Sidenav";

import "./App.scss";

interface IAppPropTypes extends React.Props<App> { }

export default class App extends React.Component<IAppPropTypes, any> {
  constructor(props: IAppPropTypes) {
    super(props);
  }

  public render(): any {
    return (
      <Router>
        <div className="App">
          <Sidenav />
          <div className="App--outlet">
            {routes}
          </div>
        </div>
      </Router>
    );
  }
}
