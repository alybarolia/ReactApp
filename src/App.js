import React, { Component } from "react";
import Entry from "./Setup";
import Tournament from "./Tournament";

/**
 * Class that initiates the Tournament Component
 */
class App extends Component {
  state = {};

  /**
   * Method that will render the Tournament Component on screen.
   *
   * @param None
   */
  render() {
    return (
      <div>
        <h1>Build Your Tournament Here!</h1>
        <Tournament />
        <p></p>
      </div>
    );
  }
}

export default App;
