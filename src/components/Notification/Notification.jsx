import { Component } from "react";
import PropTypes from "prop-types";

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <>
        <p>No feedback given.</p>
      </>
    );
  }
}
