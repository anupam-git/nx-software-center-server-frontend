import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchField from "./SearchField";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const fetchAppsList = () => { /* nothing */ };
  const updateSearch = (search: {
    text: string,
    category: string
  }) => { /* nothing */ };
  ReactDOM.render(<SearchField fetchAppsList={fetchAppsList} updateSearch={updateSearch} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
