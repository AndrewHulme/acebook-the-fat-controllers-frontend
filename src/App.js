import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import Login from "./components/login";
import NewPost from "./components/newPost";
import "./App.css";
import styles from "./css/master.module.css";

class App extends Component {
  state = {
    isLoggedIn: localStorage.getItem("token"),
    showLogin: false,
    showSignUp: false,
    showLogin: false,
    showFeed: true,
    showNewPost: localStorage.getItem("token") == null ? false : true,
  };

  changeAppState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { showSignUp, showLogin, showFeed, showNewPost } = this.state;

    return (
      <div className={styles.homepage}>
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          changeAppState={this.changeAppState}
        />

        <div className={styles.content}>
          {showNewPost && <NewPost isLoggedIn={this.state.isLoggedIn} />}

          {showFeed && <Feed changeAppState={this.changeAppState} />}

          {showLogin && <Login changeAppState={this.changeAppState} />}

          {showSignUp && <SignUp changeAppState={this.changeAppState} />}
        </div>
      </div>
    );
  }
}

export default App;
