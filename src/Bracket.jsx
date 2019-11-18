import React from "react";

/**
 * This Component is responsible for displaying the matchups between players in the form of a table.
 */
class Bracket extends React.Component {
  state = { players: this.props.players, roundPlayers: this.props.players };
  render() {
    return (
      <div>
        <h4>{this.props.tournamentName}</h4>
        {this.createHeader()}
      </div>
    );
  }

  /*
  /**
   * This method is responsible for printing the header row for the amounts of rounds there are in the
   * tournament.
   *
   * @param None
   * @returns a DOM element that prints the rounds in the table
   */
  createHeader() {
    return (
      <table>
        {this.createHeaderColoumn()}
        {this.createRounds()}
      </table>
    );
  }

  /**
   * This method puts the Round text (i.e Round 1, Round 2, etc.) in an array and prints that array in the first
   * table row.
   *
   * @param None
   * @returns a DOM element that prints the rounds in the table head
   */
  createHeaderColoumn() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner
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

  /**
   * This method is responsible for printing the matchups for the tournament in the table.
   *
   * @param None
   * @returns a DOM element that prints the matchups in the table
   */
  createRounds() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // plus 1 for winner
    let gamesRow = [];
    let roundPlayers = this.props.players;

    for (let i = 1; i < rounds + 1; i++) {
      let roundGames = this.createRoundGames(roundPlayers);
      gamesRow.push(roundGames); //pushes the matchups to this array
      roundPlayers = this.calculateNextRoundPlayers(roundPlayers); //this call calculates the winning players
    }

    return (
      // returns the matchups in the row here
      <tbody>
        <tr>{gamesRow}</tr>
      </tbody>
    );
  }

  /**
   * This method is responsible for printing the matchups for the tournament in the table.
   *
   * @param {Array} players The array that holds the current matchup
   * @returns {Array} roundPlayers The array that holds the winners of the next round
   */
  calculateNextRoundPlayers(players) {
    let roundPlayers = [];
    if (players.length === 1) {
      //if length is 1 then that is the winner and print that value
      roundPlayers.push(players[0]);
    } else {
      //else traverse through the list and call pickWinner
      for (let i = 0; i < players.length; i = i + 2) {
        roundPlayers.push(this.pickWinner(players[i], players[i + 1]));
        console.log("winner:");
        console.log(this.pickWinner(players[i], players[i + 1]));
      }
      //console.log(roundPlayers);
      return roundPlayers;
    }
  }

  /*
   * This method is responsible for picking a winner when passed two players
   *
   * @param {Player} player1 First player in the matchup
   * @param {Player} player2 Second player in the matchup
   * @returns a random player that won the matchup
   */
  pickWinner(player1, player2) {
    return 0.5 - Math.random() < 0 ? player1 : player2;
  }

  /**
   * This method is responsible for printing the winner matchup for the next rounds.
   *
   * @param {Array} players holds the players in the current round
   * @returns {Array} roundGames holds the winners of the current round
   */
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
