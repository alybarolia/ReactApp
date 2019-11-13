import React, { Component } from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.playerName
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div>Player Id: {this.props.playerId}</div>
        <input
          type="text"
          defaultValue={this.state.playerName}
          onChange={this.handleChange}
        ></input>
      </React.Fragment>
    );
  }
  handleChange(event) {
    this.props.onPlayerNameChange(this.props.playerId, event.target.value);
  }
}

export default Player;
