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
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.state.posts.map((post, index) => (
            <Post
              key={index}
              username={post.user.username}
              message={post.message}
            />
          ))}
        </div>
      );
    }
  }
}

export default Feed;
