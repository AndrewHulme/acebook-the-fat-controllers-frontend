import React, { Component } from "react";

class Post extends Component {
  state = {
    message: this.props.message,
    username: this.props.username,
  };

  render() {
    return (
      <div className="postbox">
        <div className="info">Username: {this.state.username}</div>
        <div className="message">Message: {this.state.message}</div>
      </div>
    );
  }
}

export default Post;
