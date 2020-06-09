import React, { Component } from "react";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import SignUp from "./components/signUp";
import "./App.css";

class App extends Component {
  state = { isLoggedIn: true };
  render() {
    return (
      <div className="homepage">
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Feed />
        <SignUp />
      </div>
    );
  }
}

export default App;
