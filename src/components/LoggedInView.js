"use strict";

import React from "react";
import { Link } from "react-router";

class LoggedInView extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">{this.props.currentUser}</li>
            <li className="nav-item">
              <Link to="login" className="nav-link">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LoggedInView;
