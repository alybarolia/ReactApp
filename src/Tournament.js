import React, { Component } from "react";
import Setup from "./Setup";
import Player from "./Player";
import InitiateTournament from "./InitiateTounament";
import Bracket from "./Bracket";

class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfPlayers: 0,
      tournamentName: "No Tournament",
      players: [],
      isTournamentStarted: false
    };
    this.generatePlayer = this.generatePlayer.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.createBracket = this.createBracket.bind(this);
    this.resetTournament = this.resetTournament.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <Setup onGeneratePlayer={this.generatePlayer}></Setup>
        </div>
        {!this.state.isTournamentStarted && this.renderPlayers()}
        {this.state.players.length !== 0 && (
          <InitiateTournament
            isTournamentStarted={this.state.isTournamentStarted}
            onCreateBracket={this.createBracket}
            onResetTournament={this.resetTournament}
          />
        )}
        {this.state.isTournamentStarted && (
          <Bracket
            tournamentName={this.state.tournamentName}
            players={this.state.players}
          />
        )}
      </div>
    );
  }

  resetTournament(event) {
    this.setState({
      noOfPlayers: 0,
      tournamentName: "No Tournament",
      players: [],
      isTournamentStarted: false
    });
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
    console.log(players);
    //let newPlayers = this.shuffle(players);
    //console.log(newPlayers);
    return players;
  }

  createBracket(event) {
    console.log(this.state.players);
    let randomizePlayers = this.shuffle(this.state.players);

    for (let i = 0; i < randomizePlayers; i + 2) {
      this.state.randomizePlayers.map(player => (
        <label>
          {player[i].playerName} faces {player[i + 1].playerName}
        </label>
      ));
      //print new values of randomized array on screen
    }
    this.setState({ isTournamentStarted: true });
  }

  shuffle(array) {
    let i = 0;
    let j = 0;
    let temp = 0;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
export default Tournament;
