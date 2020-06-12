import React, { Component } from "react";
import styles from "../css/navbar.module.css";

class Navbar extends Component {
  state = {
    isLoggedIn: this.props.isLoggedIn,
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  createMenu = () => {
    if (this.state.isLoggedIn === null) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" key="login">
            <a className="nav-link" href="/#" onClick={this.clickLogin}>
              Login
            </a>
          </li>
          <li className="nav-item" key="signup">
            <a className="nav-link" href="/#" onClick={this.clickSignUp}>
              Signup
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" key="logout">
            <a className="nav-link" href="/#" onClick={this.clickSignout}>
              Sign Out
            </a>
          </li>
        </ul>
      );
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isLoggedIn !== state.isLoggedIn) {
      return {
        isLoggedIn: props.isLoggedIn,
      };
    }
    return null;
  }

  clickSignUp = () => {
    this.props.changeAppState("showLogin", false);
    this.props.changeAppState("showFeed", false);
    this.props.changeAppState("showNewPost", false);
    this.props.changeAppState("showSignUp", true);
    this.props.changeAppState("errorMessage", []);
    this.props.changeAppState("showErrors", false);
  };

  clickLogin = () => {
    this.props.changeAppState("showSignUp", false);
    this.props.changeAppState("showFeed", false);
    this.props.changeAppState("showNewPost", false);
    this.props.changeAppState("showLogin", true);
    this.props.changeAppState("errorMessage", []);
    this.props.changeAppState("showErrors", false);
  };

  clickSignout = () => {
    this.props.changeAppState("showSignUp", false);
    this.props.changeAppState("showLogin", false);
    this.props.changeAppState("showNewPost", false);
    this.props.changeAppState("showFeed", true);
    localStorage.clear();
    this.props.changeAppState("isLoggedIn", null);
    this.props.changeAppState("errorMessage", []);
    this.props.changeAppState("showErrors", false);
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary static-top"
        id={styles.navbar}
      >
        <div className="container" id={styles.container}>
          <a className="navbar-brand" href="/" id={styles.brand}>
            <span id={styles.acebook}>Acebook</span>
            <small>&emsp;courtesy of the Fat Controllers</small>
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
            {this.createMenu()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
