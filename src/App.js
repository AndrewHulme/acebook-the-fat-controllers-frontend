import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import Login from "./components/login";
import NewPost from "./components/newPost";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: localStorage.getItem("token"),
    showLogin: false,
    showSignUp: false,
    showLogin: false,
    showFeed: true,
    showNewPost: false,
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

  toggleNewPost = (bool) => {
    this.setState({
      showNewPost: bool,
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
          clearLoginData={this.clearLoginData}
          toggleNewPost={this.toggleNewPost}
        />

        {showNewPost && <NewPost isLoggedIn={this.state.isLoggedIn} />}

        {showFeed && (
          <Feed
            toggleLogin={this.toggleLogin}
            toggleSignUp={this.toggleSignUp}
            toggleFeed={this.toggleFeed}
            toggleNewPost={this.toggleNewPost}
          />
        )}

        {showLogin && (
          <Login
            loginNav={this.loginHandler}
            toggleSignUp={this.toggleSignUp}
            toggleLogin={this.toggleLogin}
            toggleFeed={this.toggleFeed}
            toggleNewPost={this.toggleNewPost}
          />
        )}

        {showSignUp && (
          <SignUp
            toggleSignUp={this.toggleSignUp}
            toggleLogin={this.toggleLogin}
            toggleFeed={this.toggleFeed}
            toggleNewPost={this.toggleNewPost}
          />
        )}
      </div>
    );
  }
}

export default App;
