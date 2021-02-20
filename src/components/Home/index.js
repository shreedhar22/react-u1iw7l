"use strict";

import React from "react";
import MainView from "./MainView.js";
import Banner from "./Banner.js";

const mapStateToProps = state => ({
  articles: state.articles,
  appName: state.appName
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainView articles={this.props.articles} />
        <Banner appName={this.props.articles} />
      </div>
    );
  }
}

export default Home;
