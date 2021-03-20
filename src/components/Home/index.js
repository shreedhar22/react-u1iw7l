"use strict";

import React from "react";
import MainView from "./MainView.js";
import Banner from "./Banner.js";
import agent from "../../agent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    appName: state.appName
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all);
  }

  render() {
    return (
      <div>
        <MainView />
        <Banner appName={this.props.appName} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
