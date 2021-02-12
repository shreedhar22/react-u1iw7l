"use strict";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar nvabar-light">
        <div className="container">
          <a className="navbar-brand">{this.props.appName}</a>
        </div>
      </nav>
    );
  }
}

export default Header;
