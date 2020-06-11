import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`https://acebook-backend.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.auth_token);
        // SAVE USERNAME TO LOCAL STORAGE HERE

        if (data.hasOwnProperty("error")) {
          alert("Login failed - Invalid details.");
        } else {
          this.props.changeAppState("isLoggedIn", data.auth_token);
          this.props.changeAppState("showLogin", false);
          this.props.changeAppState("showSignUp", false);
          this.props.changeAppState("showFeed", true);
          this.props.changeAppState("showNewPost", true);
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
