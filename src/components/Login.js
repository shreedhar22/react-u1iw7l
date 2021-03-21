import React from "react";
import { connect } from "react-redux";

const mapStateToProps = props => ({});

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>
            <a> Username </a>
            <input
              type="string"
              id="username"
              onChange={this.handleUsername}
              placeholder="Enter your username"
            />
          </span>
        </div>

        <div>
          <span>
            <a> Password </a>
            <input
              type="string"
              id="password"
              onChange={this.handlePass}
              placeholder="Enter your password"
            />
          </span>
        </div>

        <div>
          <button> Login </button>
        </div>
      </div>
    );
  }
}

export default Login;
