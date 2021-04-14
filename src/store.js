import { applyMiddleware, createStore, combineReducers } from "redux";
import { promiseMiddleware } from "./middleware.js";

import common from "./reducers/common.js";
import auth from "./reducers/auth.js";
import home from "./reducers/home.js";

const reducer = combineReducers({
  auth,
  common,
  home
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;
