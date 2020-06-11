import React, { Component } from "react";

class Errors extends Component {
  state = {
    errorMessage: this.props.errorMessage,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.errorMessage !== state.errorMessage) {
      return {
        errorMessage: props.errorMessage,
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.state.errorMessage.reverse().map((error, index) => (
          <div className="alert alert-secondary">
            <strong>{error}</strong>
          </div>
        ))}
      </div>
    );
  }
}

export default Errors;
