import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import { createStore } from "redux";

const defaultState = {
  appName: "Conduit",
  articles: null
};

const reducer = function(state = defaultState, action) {
  return state;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
