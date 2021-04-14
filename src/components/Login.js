import React from "react";
import { connect } from "react-redux";

const mapStateToProps = props => ({});

class Login extends React.Component {
  render() {
    return (
      <div className="text-xs-center">
        <ul>
          <div className="nav-item">
            <a> Username </a>
            <div>
              <input
                type="string"
                id="username"
                onChange={this.handleUsername}
                placeholder="Username"
              />
            </div>
          </div>

          <div className="nav-item">
            <a> Password </a>
            <div>
              <input
                type="string"
                id="password"
                onChange={this.handlePass}
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button> Login </button>
          </div>
        </ul>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(Login);
