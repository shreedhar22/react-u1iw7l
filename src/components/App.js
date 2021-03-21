import React from "react";
import { render } from "react-dom";
import ".././style.css";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home";
import Login from "./Login";

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <p> This is your Magic Blog </p>
        <Login />
        <Home />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(App);
