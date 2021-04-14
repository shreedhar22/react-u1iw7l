import React from "react";
import { render } from "react-dom";
import ".././style.css";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home";

const mapStateToProps = state => ({
  appName: state.common.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(App);
