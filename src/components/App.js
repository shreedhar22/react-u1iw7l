import React from 'react';
import '.././style.css';
import { connect } from 'react-redux';
import Header from './Header.js';

const mapStateToProps = state => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch({ type: 'REDIRECT' })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
