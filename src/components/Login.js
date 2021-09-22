import React from "react";
import agent from "../agent";
import ListErrors from "./ListErrors";
import { connect } from "react-redux";
import { Link } from "react-router";

const mapStateToProps = state => ({ ...state.auth });

// test if git notification on Slack work again

// actions(onSubmit, onChangeEmail/Pass) are dispatched to
// props to store them in auth reducer.

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: "UPDATE_AUTH_FIELD", key: "email", value }),
  onChangePassword: value =>
    dispatch({ type: "UPDATE_AUTH_FIELD", key: "password", value }),
  onSubmit: (email, password) => value =>
    dispatch({ type: "LOGIN", payload: agent.Auth.login(email, password) })
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
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword}
                    />
                  </fieldset>

                  <Link to="/login">
                    <button
                      className="btn btn-lg btn-primary pull-xs-right"
                      type="submit"
                      disabled={this.props.inProgress}
                    >
                      Sign in
                    </button>
                  </Link>

                  <br />
                  <br />
                  <br />
                  <Link to="register">
                    <button className="btn btn-lg btn-primary pull-xs-right">
                      Register
                    </button>
                  </Link>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
