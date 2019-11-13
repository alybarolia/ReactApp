import React, { Component } from "react";

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerValue: 0, tournamentName: "", tempPlayerValue: 0 };
    this.generatePlayer = this.generatePlayer.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.value}
        <label>Tournament Name:</label>
        <input type="text" onChange={this.nameChanged} />
        <p></p>
        <label> # of players participating: </label>
        <input
          type="number"
          value={this.state.tempPlayerValue}
          onChange={this.handleInput}
        />
        <button onClick={this.generatePlayer}> Generate Players</button>
        <label> {this.props.tournamentName}</label>
      </div>
    );
  }

  handleInput(event) {
    //console.log(this);
    const playerChange = event.target.value;
    this.setState({ tempPlayerValue: playerChange });
    console.log(playerChange);
  }

  generatePlayer(event) {
    //console.log(this);
    const playerChange = this.state.tempPlayerValue;

    this.props.onGeneratePlayer(
      this.state.tempPlayerValue,
      this.state.tournamentName
    );
    console.log(playerChange);
  }

  nameChanged(event) {
    const newName = event.target.value;
    this.setState({ nameChange: newName });
    console.log(newName);
  }
}

export default Setup;
