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

  handleSubmit = (event) => {
    //Insert API request here
    event.preventDefault();
  };

  // curl -H "Content-Type: application/json" -X POST -d '{"email":"email","password":"12345"}' http://localhost:3000/login

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

        if (data.hasOwnProperty("error")) {
          alert("Login failed - Invalid details.");
        } else {
          this.props.loginNav();
          this.props.toggleLogin(false);
          this.props.toggleSignUp(false);
          this.props.toggleFeed(true);
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
