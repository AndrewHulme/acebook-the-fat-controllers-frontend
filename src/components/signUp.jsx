import React, { Component } from "react";

class SignUp extends Component {
  state = {};

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value;
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

  onPostResponse(response) {
    //IF USERNAME ALREADY EXISTS
    //IF EMAIL ALREADY EXISTS
    //IF PASSWORD BLANK
    //ELSE -
    // REMOVE SIGNUP FORM FROM PAGE
    // DISPLAY LOGIN ON PAGE
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm password:</label>
          <input
            type="password"
            name="password_confirmation"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;
