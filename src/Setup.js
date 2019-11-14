import React, { Component } from "react";

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerValue: 0,
      tournamentName: "",
      tempPlayerValue: 0,
      message: ""
    };
    this.generatePlayer = this.generatePlayer.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

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
        <h4>{this.state.tournamentName}</h4>
      </div>
    );
  }

  handleInput(event) {
    const playerChange = event.target.value;

    this.setState({ tempPlayerValue: playerChange });
  }

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

  nameChanged(event) {
    const newName = event.target.value;
    this.setState({ tournamentName: newName });
    //console.log(newName);
  }
}

export default Setup;
