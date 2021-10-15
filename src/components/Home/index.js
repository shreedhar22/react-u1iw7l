import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName
});

// onLoad action along with the payload is dispatched to props and stored in the redux store
const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends React.Component {
  // in order to dispatch articles to props they are fetched first from agent
  // onLoad is then dispatched within mapDispatchToProps
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
