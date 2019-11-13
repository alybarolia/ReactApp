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
        <p>
          <button onClick={this.createBracket}>Start Tournament</button>
        </p>
      </div>
    );
  }

  createBracket() {
    console.log("hello");
  }
}

export default App;
