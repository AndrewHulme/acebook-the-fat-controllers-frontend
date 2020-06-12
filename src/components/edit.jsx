import React, { Component } from "react";
import styles from "../css/master.module.css";

class Edit extends Component {
  state = {
    display: false,
    postId: this.props.postId,
    editMessage: "",
  };

  changeDisplay = (bool) => {
    this.setState({ display: bool, editMessage: "" });
  };

  save = () => {
    fetch("http://acebook-backend.herokuapp.com/edit", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: this.state.postId,
        post: { message: this.state.editMessage },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.updateFeed();
        this.setState({ display: false, editMessage: "" });
      });
  };

  handleChange = (event) => {
    this.setState({ editMessage: event.target.value });
  };

  render() {
    if (this.state.display === false) {
      return (
        <div>
          <button
            className="btn btn-primary"
            id={styles.button}
            onClick={() => this.changeDisplay(true)}
          >
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="our-form">
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                type="text"
                name="editMessage"
                placeholder="Edit"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>

            <input
              type="submit"
              value="Save"
              className="btn btn-primary"
              id={styles.button}
              onClick={this.save}
            />

            <input
              type="submit"
              value="Cancel"
              className="btn btn-primary"
              id={styles.button}
              onClick={() => this.changeDisplay(false)}
            />
          </form>
        </div>
      );
    }
  }
}

export default Edit;
