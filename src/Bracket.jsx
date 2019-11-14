import React, { Component } from "react";

class Bracket extends Component {
  state = { players: this.props.players, roundPlayers: this.props.players };
  render() {
    return <div>{this.createHeader()}</div>;
  }

  createHeader() {
    return (
      <table>
        {this.createHeaderColoumn()}
        {this.createRounds()}
      </table>
    );
  }

  createHeaderColoumn() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // plus 1 for winner
    let headerRow = [];

    for (let i = 1; i < rounds; i++) {
      headerRow.push(<th key={i}>Round {i}</th>);
    }
    headerRow.push(<th key="700">Winner</th>);
    return (
      <thead>
        <tr>{headerRow}</tr>
      </thead>
    );
  }

  createRounds() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // plus 1 for winner
    let gamesRow = [];
    let roundPlayers = this.state.roundPlayers;

    for (let i = 1; i < rounds + 1; i++) {
      let roundGames = this.createRoundGames(roundPlayers);
      console.log(roundGames);
      console.log(roundPlayers);
      gamesRow.push(roundGames);
      roundPlayers = this.calculateNextRoundPlayers(roundPlayers);
    }

    return (
      <tbody>
        <tr>{gamesRow}</tr>
      </tbody>
    );
  }

  calculateNextRoundPlayers(players) {
    let roundPlayers = [];
    if (players.length === 1) {
      roundPlayers.push(players[0]);
    } else {
      for (let i = 0; i < players.length; i = i + 2) {
        roundPlayers.push(this.pickWinner(players[i], players[i + 1]));
        console.log("winner:" + this.pickWinner(players[i], players[i + 1]));
      }
      //console.log(roundPlayers);
      return { roundPlayers };
    }
  }

  pickWinner(player1, player2) {
    return 0.5 - Math.random() < 0 ? player1 : player2;
  }

  createRoundGames(players) {
    let roundGames = [];
    if (players.length === 1) {
      roundGames.push(
        <table key="1">
          <tbody key="1">
            <tr>
              <td key="1">{players[0].name}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      for (let i = 0; i < players.length; i = i + 2) {
        roundGames.push(
          <table key={i}>
            <tbody key={i}>
              <tr>
                <td key={i}>{players[i].name}</td>
              </tr>
              <tr>
                <td key={i + 1}>{players[i + 1].name}</td>
              </tr>
            </tbody>
          </table>
        );
      }
    }
    return <td key={Math.random()}>{roundGames}</td>;
  }
}

export default Bracket;
