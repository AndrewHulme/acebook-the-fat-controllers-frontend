import React, { Component } from "react";

class NewPost extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label>What's on your mind?</label>
          <input
            type="text"
            name="username"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default NewPost;
