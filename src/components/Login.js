import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = props => ({
  onChangeEmail: dispatch => {},

  onChangePassword: dispatch => {},

  onSubmit: (email, password) => dispatch => {}
});

class Login extends React.Component {
  constructor() {
    this.changeEmail = event => this.props.onChangeEmail();

    this.changePassword = event => this.props.onChangePassword();

    this.submitForm = event => this.props.onSubmit(email, password);
  }

  render() {
    const { email, password } = this.props;
    return (
      <form onSubmit={this.submitForm(email, password)}>
        <div className="text-xs-center">
          <ul>
            <div className="nav-item">
              <a> Username </a>
              <div>
                <input
                  type="string"
                  id="Email"
                  value="Email"
                  onChange={this.changeEmail}
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
                  onChange={this.onChangePassword}
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button> Login </button>
            </div>
          </ul>
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatcchToProps
)(Login);
