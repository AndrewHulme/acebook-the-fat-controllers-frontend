import React, { Component } from "react";

class Post extends Component {
  state = { message: "My first post" };
  render() {
    return (
      <div className="postbox">
        <div className="message">{this.state.message}</div>
      </div>
    );
  }
}

export default Post;
