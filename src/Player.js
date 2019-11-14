import React, { Component } from "react";

/**
 * Class that is responisble for dealing with players in a tournament
 */
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.playerName
    };
    //binding of methods
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * A render method that will display components and refresh whenever setState() is called on a state variable
   *This render method is called when "Generate Players" button is pressed.
   *
   * @param None
   */
  render() {
    //fragmentation to include multiple parent tags
    return (
      <React.Fragment>
        <div>Player {this.props.playerId}</div>
        <input
          type="text"
          defaultValue={this.state.playerName}
          onChange={this.handleChange}
        ></input>
      </React.Fragment>
    );
  }

  /**
   * When ever a field beside a player is modified, it will call this method which will uplift this state to the tournament class
   * as Tournament is what should have access to the players.
   *
   * @param {Event} event the event that triggered the name change
   */
  handleChange(event) {
    this.props.onPlayerNameChange(this.props.playerId, event.target.value);
  }
}

export default Player;
