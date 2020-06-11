import React, { Component } from "react";
import Post from "./post";

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
          // console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

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
            // <Post
            //   key={index}
            //   username={post.user.username}
            //   message={post.message}
            // />

            <div className="postbox" key={index}>
              <div className="info">Username: {post.user.username}</div>
              <div className="message">Message: {post.message}</div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Feed;
