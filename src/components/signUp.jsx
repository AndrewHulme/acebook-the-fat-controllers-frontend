import React, { Component } from "react";
import styles from "../css/master.module.css";

class SignUp extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://acebook-backend.herokuapp.com/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: this.state,
      }),
    })
      .then((response) => response.text())
      .then((html) => this.onPostResponse(html));
  };

  onPostResponse(input) {
    let response = JSON.parse(input);

    if (response.created_at == null) {
      alert("There was a problem signing up. Please try again.");
    } else {
      this.props.changeAppState("showSignUp", false);
      this.props.changeAppState("showLogin", true);
      this.props.changeAppState("showFeed", false);
    }
  }

  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit} className="our-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm password:</label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
