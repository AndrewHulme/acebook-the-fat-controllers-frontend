import React, { Component } from "react";
import styles from "../css/master.module.css";

class NewPost extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();

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
        this.props.updateFeed();
        this.props.changeAppState("refreshFeed", true);
      });

    // this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="our-form">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              type="text"
              name="message"
              placeholder="What's on your mind?"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            value="Post"
            className="btn btn-primary"
            id={styles.button}
          />
        </form>
        <br></br>
      </div>
    );
  }
}

export default NewPost;
