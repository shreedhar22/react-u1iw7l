import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
import store from './store';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={RegisterForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
