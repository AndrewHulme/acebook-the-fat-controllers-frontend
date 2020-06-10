import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: true,
    showSignUp: true,
  };

  toggleSignUp = () => {
    this.setState({
      showSignUp: !this.state.showSignUp,
    });
  };

  render() {
    const { showSignUp } = this.state;

    return (
      <div className="homepage">
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Feed />
        {showSignUp && <SignUp toggleSignUp={this.toggleSignUp} />}
      </div>
    );
  }
}

export default App;
