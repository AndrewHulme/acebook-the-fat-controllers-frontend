import React, { Component } from "react";

class Navbar extends Component {
  state = {
    isLoggedIn: true,
    whenLoggedOut: [
      { name: "Login", link: "loginlink" },
      { name: "Sign Up", link: "signUpLink" },
    ],
    whenLoggedIn: [
      { name: "My Profile", link: "myProfileLink" },
      { name: "Log Out", link: "logOutLink" },
    ],
  };

  createButtons = () => {
    if (this.state.isLoggedIn === true) {
      return this.state.whenLoggedIn.map((button) =>
        this.newButton(button.name, button.link)
      );
    } else {
      return this.state.whenLoggedOut.map((button) =>
        this.newButton(button.name, button.link)
      );
    }
  };

  newButton(name, link) {
    return (
      <button className="button" href={link} key={name}>
        {name}
      </button>
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Acebook</h1>
        <nav className="navbar">{this.createButtons()}</nav>
      </div>
    );
  }
}

export default Navbar;
