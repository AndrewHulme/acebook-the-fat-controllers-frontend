import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  handleChange = (event) => {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    } else if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    } else if (event.target.name === "passwordConfirmation") {
      this.setState({ passwordConfirmation: event.target.value });
    }

    // this.state[event.target.name] = event.target.value;
    console.log(this.state[event.target.name]);
  };

  handleSubmit = (event) => {
    console.log(this.state);
    //Insert API request here
    event.preventDefault();
  };

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
            name="passwordConfirmation"
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
