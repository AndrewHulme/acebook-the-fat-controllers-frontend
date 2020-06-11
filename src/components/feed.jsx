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

  api = () => {
    console.log("apid called");
    fetch("http://acebook-backend.herokuapp.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  static getDerivedStateFromProps(props, state) {
    if (props.refreshFeed !== state.refreshFeed) {
      return {
        refreshFeed: props.refreshFeed,
      };
    }
    return null;
  }

  componentDidMount() {
    this.api();
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    console.log("patpat" + posts);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {posts.reverse().map((post, index) => (
            // <Post
            //   key={index}
            //   username={post.user.username}
            //   message={post.message}
            // />
            // <p>{post.message}</p>
            <div className="postbox">
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
