import React, { Component } from "react";

class InitiateTournament extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onCreateBracket}>Start Tournament</button>
        <button onClick={this.props.onResetTournament}>Reset Tournament</button>
        ;
      </React.Fragment>
    );
  }
}

export default InitiateTournament;
