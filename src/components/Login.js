import React from 'react';
import agent from '../agent';
import ListErrors from './ListErrors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state.auth });
const mapDispatchToProps = props => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_AUTH_FIELD', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_AUTH_FIELD', key: 'password', value }),
  onSubmit: (email, password) => value =>
    dispatch({ type: 'LOGIN', payload: agent.Auth.login(email, password) })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = event => this.props.onChangeEmail(event.target.value);

    this.changePassword = event =>
      this.props.onChangePassword(event.target.value);

    this.submitForm = (email, password) => event => {
      event.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  render() {
    const { email, password } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a>Need an account?</a>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <div className="text-xs-center">
                  <ul>
                    <div className="nav-item">
                      <a> Username </a>
                      <div>
                        <input
                          type="string"
                          id="Email"
                          onChange={this.onChangeEmail}
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
                      <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit"
                        disabled={this.props.inProgress}
                      >
                        Sign In
                      </button>
                    </div>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
