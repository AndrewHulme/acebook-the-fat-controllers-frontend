import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import Login from "./components/login";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: null,
    showLogin: false,
    showSignUp: false,
    showLogin: false,
    showFeed: true,
  };

  loginHandler = () => {
    this.setState({
      isLoggedIn: localStorage.getItem("token"),
    });
  };

  clearLoginData = () => {
    this.setState({
      isLoggedIn: null,
    });
  };

  toggleSignUp = (bool) => {
    this.setState({
      showSignUp: bool,
    });
  };

  toggleFeed = (bool) => {
    this.setState({
      showFeed: bool,
    });
  };

  toggleLogin = (bool) => {
    this.setState({
      showLogin: bool,
    });
  };

  render() {
    const { showSignUp, showLogin, showFeed } = this.state;

    return (
      <div className="homepage">
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          toggleSignUp={this.toggleSignUp}
          toggleLogin={this.toggleLogin}
          toggleFeed={this.toggleFeed}
          clearLoginData={this.clearLoginData}
        />

        {showFeed && (
          <Feed
            toggleLogin={this.toggleLogin}
            toggleSignUp={this.toggleSignUp}
            toggleFeed={this.toggleFeed}
          />
        )}

        {showLogin && (
          <Login
            loginNav={this.loginHandler}
            toggleSignUp={this.toggleSignUp}
            toggleLogin={this.toggleLogin}
            toggleFeed={this.toggleFeed}
          />
        )}

        {showSignUp && (
          <SignUp
            toggleSignUp={this.toggleSignUp}
            toggleLogin={this.toggleLogin}
            toggleFeed={this.toggleFeed}
          />
        )}
      </div>
    );
  }
}

export default App;
