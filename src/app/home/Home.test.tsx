import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import Home from "./Home";

it("renders without crashing", () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    Home: {
      apps: [{ "abstract": { "null": "Test Abstract 1" }, "categories": ["Category1"], "format": 1, "icon": "icon1", "id": "1", "keywords": [], "name": { "null": "App 1" } }, { "abstract": { "null": "Test Abstract 2" }, "categories": ["Category2"], "format": 1, "icon": "icon2", "id": "2", "keywords": [], "name": { "null": "App 2" } }, { "abstract": { "null": "Test Abstract 3" }, "categories": ["Category3"], "format": 1, "icon": "icon3", "id": "3", "keywords": [], "name": { "null": "App 3" } }, { "abstract": { "null": "Test Abstract 4" }, "categories": ["Category4"], "format": 1, "icon": "icon4", "id": "4", "keywords": [], "name": { "null": "App 4" } }, { "abstract": { "null": "Test Abstract 5" }, "categories": ["Category5"], "format": 1, "icon": "icon5", "id": "5", "keywords": [], "name": { "null": "App 5" } }]
    }
  });

  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
