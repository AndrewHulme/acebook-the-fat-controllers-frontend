import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import Login from "./components/login";
import NewPost from "./components/newPost";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: null,
    showSignUp: true,
    showLogin: true,
    showFeed: true,
    showNewPost: true,
  };

  loginHandler = () => {
    this.setState({
      isLoggedIn: localStorage.getItem("token"),
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
    const { showSignUp, showLogin, showFeed, showNewPost } = this.state;

    return (
      <div className="homepage">
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          toggleSignUp={this.toggleSignUp}
          toggleLogin={this.toggleLogin}
          toggleFeed={this.toggleFeed}
        />

        {showNewPost && <NewPost isLoggedIn={this.state.isLoggedIn} />}

        {showFeed && (
          <Feed
            toggleLogin={this.toggleLogin}
            toggleSignUp={this.toggleSignUp}
            toggleFeed={this.toggleFeed}
          />
        )}

        <Login
          loginNav={this.loginHandler}
          toggleSignUp={this.toggleSignUp}
          toggleLogin={this.toggleLogin}
          toggleFeed={this.toggleFeed}
        />

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
