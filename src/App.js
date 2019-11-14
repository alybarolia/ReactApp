import React, { Component } from "react";
import Entry from "./Setup";
import Tournament from "./Tournament";

class App extends Component {
  state = {};
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
