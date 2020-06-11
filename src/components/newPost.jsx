import React, { Component } from "react";

// curl -H "Authorization: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1OTE2OTk2NDh9.XtSAuv8VH02C96oHc5uqty01Q6Ics6KralcuoKx-hhM"
// -H "Content-Type: application/json" -H "Accept: application/json" -X POST -d '{"post":{"message":"hello,world!"}}' http://localhost:3000/new

// # example responses:
// $ {"id":9,"message":"hello,world!","created_at":"2020-06-08T11:43:16.440Z","updated_at":"2020-06-08T11:43:16.440Z"}
// $ {"error":"Not Authorized"}

// 1. Auth token
// 2. Message

class NewPost extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(this.state);
    // console.log(localStorage.getItem("token"));

    fetch(`https://acebook-backend.herokuapp.com/new`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post: { message: this.state.message },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label>What's on your mind?</label>
          <input
            type="text"
            name="message"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default NewPost;
