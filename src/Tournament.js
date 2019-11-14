import React, { Component } from "react";
import Setup from "./Setup";
import Player from "./Player";
import InitiateTournament from "./InitiateTounament";
import Bracket from "./Bracket";

/**
 * This Class is responsible for creating the tournament with the number of players defined by the user and
 * holding an array of the players.
 */
class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfPlayers: 0,
      tournamentName: "Unnamed Tournament",
      players: [],
      isTournamentStarted: false
    };
    //method binding to use the "this" keyword
    this.generatePlayer = this.generatePlayer.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.createBracket = this.createBracket.bind(this);
    this.resetTournament = this.resetTournament.bind(this);
  }

  /**
   * Render method that renders the Setup component with the appropriate properties. If the isTournamentStarted
   * state is false it render the Player componenet, and when the state is changed to true, then the players info
   * will be hidden and the Bracket component will be shown on screen.
   * The InitiateTournament component will be rendered if the number of players is greater than 0 and is
   * a power of 2.
   *
   * @param None
   */
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

  /**
   * This method is responsible for setting the state of all the state variable back to their initial state
   * and resetting the fields back to their default value.
   *
   * @param {Event} event the action that triggeres the event
   */
  resetTournament(event) {
    this.setState({
      noOfPlayers: 0,
      tournamentName: "Unnamed Tournament",
      players: [],
      isTournamentStarted: false
    });
  }

  /**
   * This method is responsible for creating Player components that have a unique id and a unique "dummy" name
   *
   * @param None.
   * @return {Array} players The array fo players that are in the tournament
   */
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

  /**
   * This method is responsible for handling the name change event that triggers when a player name is entered
   * in the textbox.
   *
   * @param {Integer} id The id that was set on creation of that Player component to determine which player is
   * being edited.
   * @param {String} playerName The value that was entered as the desired name by the user.
   *
   */
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

  /**
   * This method is responsible for modifying the state when the number of desired players is a power of 2.
   *
   * @param {Integer} noOfPlayers The number of players that are taking part in the tournament
   * @param {String} tournamentName The value that was entered as the desired Tournament name by the user.
   *
   */
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

  /**
   * This method is responsible for creating players that was defined by the user, each with a unique id and name.
   *
   * @param {Integer} noOfPlayers The number of players that are taking part in the tournament.
   * @return {Array} player The array of players with unique id and names
   */
  setupPlayers(noOfPlayers) {
    let players = [];
    for (let i = 0; i < noOfPlayers; i++) {
      players.push({ id: i, name: "Player " + i });
    }
    console.log(players);
    //let newPlayers = this.shuffle(players);
    //console.log(newPlayers);
    return players;
  }

  /**
   * (This method is not being used)
   * This method is responsible for randomizing the player array and creating a matchup between two players. Once
   * the matchup is created, the isTournamentStarted state is set to true.
   *
   * @param {Event} event the action that triggeres the event.
   */
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

  /**
   * This method shuffles an array using the Fisher-Yates algorithm.
   *
   * @param {Array} array the array that is to be shuffled.
   * @return {Array} array returns the shuffled array.
   */
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
