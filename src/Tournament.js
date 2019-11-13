import React, { Component } from "react";
import Setup from "./Setup";
import Player from "./Player";

class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfPlayers: 0,
      tournamentName: "No Tournament",
      players: []
    };
    this.generatePlayer = this.generatePlayer.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.createBracket = this.createBracket.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <Setup onGeneratePlayer={this.generatePlayer}></Setup>
        </div>
        {this.renderPlayers()}
      </div>
    );
  }

  renderPlayers() {
    const players = this.state.players.map(player => (
      <Player
        key={player.id}
        playerId={player.id}
        playerName={player.name}
        onPlayerNameChange={this.handlePlayerNameChange}
      />
    ));
    return <div>{players}</div>;
  }

  handlePlayerNameChange(id, playerName) {
    console.log(playerName);
    let updatedPlayers = [];
    let oldPlayers = this.state.players;
    for (let i = 0; i < oldPlayers.length; i++) {
      let player = oldPlayers[i];
      if (player.id === id) {
        updatedPlayers.push({ id: player.id, name: playerName });
      } else {
        updatedPlayers.push(player);
      }
    }
    this.setState({
      players: updatedPlayers
    });
  }

  generatePlayer(noOfPlayers, tournamentName) {
    //console.log(this);
    let players = this.setupPlayers(noOfPlayers);

    this.setState({
      noOfPlayers: noOfPlayers,
      tournamentName: tournamentName,
      players: players
    });
    console.log(noOfPlayers);
  }

  setupPlayers(noOfPlayers) {
    let players = [];
    for (let i = 0; i < noOfPlayers; i++) {
      players.push({ id: i, name: "player" + i });
    }
    return players;
  }

  createBracket(event) {
    console.log(this.state.players);
  }
}
export default Tournament;
