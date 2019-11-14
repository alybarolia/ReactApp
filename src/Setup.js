import React, { Component } from "react";

/**
 * Class responsible for setting up all the initial text boxes that hold the tournament name and the number
 * of players participating in the tournament.
 */
class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerValue: 0,
      tournamentName: "",
      tempPlayerValue: 0, //temp value that holds the modified value to test if it is a power of 2
      message: ""
    };
    //binding of methods so we can use "this" keyword
    this.generatePlayer = this.generatePlayer.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /**
   * Render method that will print out the text boxes that allow the user to input data for the tournament
   * name and # of players in the tournament
   *
   * @param None
   */
  render() {
    return (
      <div>
        <label>Tournament Name:</label>
        <input type="text" onChange={this.nameChanged} />
        <p></p>
        <label> # of players participating: </label>
        <input
          type="number"
          defaultValue={this.state.tempPlayerValue}
          onChange={this.handleInput}
        />
        <button onClick={this.generatePlayer}> Generate Players</button>
        {this.state.message}
      </div>
    );
  }

  /**
   * This method is responsible for setting the state of the temp value to the value the user entered
   *
   * @param {Event} event the event that triggered the player count change (text field)
   */
  handleInput(event) {
    const playerChange = event.target.value;

    this.setState({ tempPlayerValue: playerChange });
  }

  /**
   * This method checks to see if the temp value is a power of 2.
   * - If the value is a power of 2, we will uplift the state to a property passed which will deal with
   * creating players.
   * - If the value is not a power of 2, then a message will be displaed asking the user to input a value
   * that is a power of 2.
   *
   * @param {Event} event the action that triggeres the event
   */
  generatePlayer(event) {
    //console.log(this);
    const playerChange = this.state.tempPlayerValue;
    if (
      this.state.tempPlayerValue > 1 &&
      Number.isInteger(Math.log(this.state.tempPlayerValue) / Math.log(2))
    ) {
      this.setState({ message: "" });
      this.props.onGeneratePlayer(
        this.state.tempPlayerValue,
        this.state.tournamentName
      );
    } else {
      this.setState({ message: " Input must be a power of 2 to continue..." });
    }

    //console.log(playerChange);
  }

  /**
   * This method is responsible for storing the tournamentName state to the value the user entered.
   *
   * @param {Event} event the event that triggered the name change
   */
  nameChanged(event) {
    const newName = event.target.value;
    this.setState({ tournamentName: newName });
    //console.log(newName);
  }
}

export default Setup;
