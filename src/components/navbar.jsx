import React, { Component } from "react";

class Navbar extends Component {
  state = {
    isLoggedIn: this.props.isLoggedIn,

    isOpen: false,

    whenLoggedOut: [
      { name: "Login", link: "loginlink" },
      { name: "Sign Up", link: "signUpLink" },
    ],

    whenLoggedIn: [
      { name: "My Profile", link: "myProfileLink" },
      { name: "Log Out", link: "logOutLink" },
    ],
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  createMenuItem(name, link) {
    return (
      <li className="nav-item" key={name}>
        <a className="nav-link" href={link}>
          {name}
        </a>
      </li>
    );
  }

  createMenu = () => {
    if (this.state.isLoggedIn !== null) {
      return this.state.whenLoggedIn.map((item) =>
        this.createMenuItem(item.name, item.link)
      );
    } else {
      return this.state.whenLoggedOut.map((item) =>
        this.createMenuItem(item.name, item.link)
      );
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Acebook
            <small> - courtesy of the Fat Controllers</small>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              (this.state.isOpen ? "" : "collapse ") + "navbar-collapse"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">{this.createMenu()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
