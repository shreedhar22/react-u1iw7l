import { applyMiddleware, createStore, combineReducers } from "redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware.js";

import common from "./reducers/common.js";
import auth from "./reducers/auth.js";
import home from "./reducers/home.js";

const reducer = combineReducers({
  auth,
  common,
  home
});

// Not sused as of now
// const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promiseMiddleware, localStorageMiddleware)
);

export default store;
