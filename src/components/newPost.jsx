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
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="message"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="What's on your mind?"
          />
        </div>

        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default NewPost;

{
  /* <div className="card gedf-card">
        <div class="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src="https://picsum.photos/50/50"
                  alt=""
                ></img>
              </div>
              <div className="ml-2">
                <div className="h5 m-0">@{this.state.username}</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="gedf-drop1"
                >
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                  <a className="dropdown-item" href="#">
                    Hide
                  </a>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i>15 min ago
          </div>
          <a className="card-link" href="#"></a>
          <p className="card-text">{this.state.message}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a>
        </div>
      </div> */
}
