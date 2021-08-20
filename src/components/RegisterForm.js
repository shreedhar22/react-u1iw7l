import React from 'react';

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_AUTH_FIELD', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_AUTH_FIELD', key: 'password', value }),
  onSubmitForm: (email, password) => value =>
    dispatch({
      type: 'REGISTER',
      payload: agent.Auth.register(email, password)
    })
});

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.submitForm = event => (email, password) => {};

    this.changeEmail = event => {};

    this.changePassword = event => {};

    this.changeConfirmedPassword = event => {};
  }
  render() {
    const { email, password, confirmedPassword } = this.props;
    return (
      <div>
        <div className="auth-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <p className="text-xs-center">
                  <a>Need an account?</a>
                </p>
                <h1 className="text-xs-center">Sign UP</h1>
                <br />
                <form onSubmit={this.submitForm(email, password)}>
                  <fieldset>
                    <fieldset className="text-xs-center">
                      <input
                        value={email}
                        placeholder="Email"
                        onChange={this.changeEmail}
                      />
                    </fieldset>
                    <br />
                    <fieldset className="text-xs-center">
                      <input
                        placeholder="Password"
                        value={password}
                        onChange={this.changePassword}
                      />
                    </fieldset>
                    <br />
                    <fieldset className="text-xs-center">
                      <input
                        value={confirmedPassword}
                        placeholder="Confirm Password"
                        onChange={this.changeConfirmedPassword}
                      />
                    </fieldset>
                    <br />
                    <fieldset className="text-xs-center">
                      <button>Sign UP</button>
                    </fieldset>

                    <fieldset />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
