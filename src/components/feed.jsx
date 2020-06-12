import React, { Component } from "react";
import "../feed.css";
import styles from "../css/master.module.css";
import Edit from "./edit";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    this.api();
  }

  api = () => {
    fetch("http://acebook-backend.herokuapp.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  deleteApi = (postId) => {
    fetch("http://acebook-backend.herokuapp.com/delete", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: postId }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.api();
      });
  };

  currentUser = (username, postId) => {
    if (username === localStorage.getItem("username")) {
      return (
        <div>
          <button
            className="btn btn-primary"
            id={styles.button}
            onClick={() => this.deleteApi(postId)}
          >
            Delete
          </button>
          <Edit postId={postId} />
        </div>
      );
    } else {
      return null;
    }
  };

  ifEdit = (created_at, updated_at) => {
    console.log(created_at);
    console.log(updated_at);
    if (created_at != updated_at) {
      return " - Edited";
    }
  };

  timeSince(date) {
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var picture = {};
      var i = 1;
      this.state.posts.forEach(
        (element, index) =>
          (picture[element.user.username] =
            "https://picsum.photos/id/" + index + "/50/50")
      );
      console.log(picture);
      return (
        <div>
          {console.log(this.state.posts[0].user.username)}
          {this.state.posts.reverse().map((post, index) => (
            <div className="card gedf-card" key={index}>
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      <img
                        className="rounded-circle"
                        width="45"
                        src={picture[post.user.username]}
                        alt=""
                      ></img>
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">@{post.user.username}</div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="card-body">
                <div className="text-muted h7 mb-2">
                  {" "}
                  <i className="fa fa-clock-o">
                    {this.timeSince(Date.parse(post.created_at))} ago
                    {post.created_at != post.updated_at && " - Edited"}
                  </i>
                </div>
                <a className="card-link" href="/#"></a>
                <p className="card-text">{post.message}</p>
              </div>
              {this.currentUser(post.user.username, post.id)}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Feed;
