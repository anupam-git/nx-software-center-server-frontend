import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./app/App";
import homeReducer from "./home/HomeReducer";
import registerServiceWorker from "./registerServiceWorker";

import "./index.scss";

const rootReducer = combineReducers({
  Home: homeReducer
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
