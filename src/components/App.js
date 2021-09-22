import React from "react";
import ".././style.css";
import { connect } from "react-redux";
import { LoggedInView } from "./Header";
import agent from "../agent.js";

// states(appName, currentUser and redirectTo(where)) are
// fetched from the common reducer to attach to props
const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

// actions(onLoad, onRedirect) are dispatched to
// props to store them in common reducer(redux store)
const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => dispatch({ type: "APP_LOAD", payload, token }),
  onRedirect: () => dispatch({ type: "REDIRECT" })
});

class App extends React.Component {
  // in order to dispatch the current user and token to
  // props they are first fetched from the agent.
  // onLoad is then dispatched within mapDispatchToProps
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
    console.log("agent auth current:" + agent.Auth.current());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }
  render() {
    return (
      <div>
        <LoggedInView appName={this.props.appName} />
        {this.props.children}
      </div>
    );
    // } else {
    //   return (
    //     <div>
    //       <LoggedOutView appName={this.props.appName} />
    //       {this.props.children}
    //     </div>
    //   );
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
