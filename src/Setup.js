import React, { Component } from "react";

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerValue: 0,
      tournamentName: "",
      tempPlayerValue: 0,
      message: " Input should be a power of 2",
      powerOf2: false
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
    this.setState({ message: "", powerOf2: true });

    let playerChange = event.target.value;

    if (playerChange <= 1) {
      this.setState({
        message: event.target.value + " is not a power of 2",
        powerOf2: false
      });
    }
    while (playerChange > 1) {
      if (playerChange % 2 !== 0) {
        this.setState({
          message: event.target.value + " is not a power of 2",
          powerOf2: false
        });
      }
      playerChange = playerChange / 2;
    }
    playerChange = event.target.value;

    this.setState({ tempPlayerValue: event.target.value });
  }

  generatePlayer(event) {
    //console.log(this);
    const playerChange = this.state.tempPlayerValue;
    if (this.state.powerOf2) {
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
