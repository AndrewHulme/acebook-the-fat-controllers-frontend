import React, { Component } from "react";
import styles from "../css/master.module.css";

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
          this.props.changeAppState("errorMessage", ["Invalid credentials"]);
          this.props.changeAppState("showErrors", true);
        } else {
          this.props.changeAppState("errorMessage", []);
          this.props.changeAppState("showErrors", false);
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
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            id={styles.button}
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Login;
