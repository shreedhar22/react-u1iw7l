import React from "react";
import { render } from "react-dom";
import ".././style.css";
import { connect } from "react-redux";
import Header from "./Header.js";
import MainView from "./MainView.js";

const mapStateToProps = state => ({
  appName: state.appName,
  articles: state.articles
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header app_name={this.props.appName} />
        <p> This is your Magic Blog </p>
        <MainView articles={this.props.articles} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(App);
