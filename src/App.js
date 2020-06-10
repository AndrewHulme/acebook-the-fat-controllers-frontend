import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import Login from "./components/login";
import "./App.css";

class App extends Component {
  state = { isLoggedIn: null };

  loginHandler = () => {
    this.setState({
      isLoggedIn: localStorage.getItem("token"),
    });
  };

  render() {
    return (
      <div className="homepage">
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Feed />
        <SignUp />
        <Login loginNav={this.loginHandler} />
      </div>
    );
  }
}

export default App;
