import React from "react";
import { render } from "react-dom";
import ".././style.css";
import { connect } from "react-redux";
import Header from "./Header.js";

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <p> This is your Magic Blog </p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

export default connect(
  mapStateToProps,
  () => ({})
)(App);
