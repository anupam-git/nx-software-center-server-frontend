import * as React from "react";
import * as ReactDOM from "react-dom";

import Sidenav from "./Sidenav";

it("renders without crashing", () => {

  const div = document.createElement("div");
  ReactDOM.render(<Sidenav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
