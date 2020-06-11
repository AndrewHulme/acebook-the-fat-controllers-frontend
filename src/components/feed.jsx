import React, { Component } from "react";
import Post from "./post";
import "../feed.css";

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
    // console.log("apid called");
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
      return (
        <div>
          {this.state.posts.reverse().map((post, index) => (
            <div className="card gedf-card">
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
                  </i>
                </div>
                <a className="card-link" href="#"></a>
                <p className="card-text">{post.message}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Feed;
