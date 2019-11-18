import React from "react";

/**
 * This Component is responsible for displaying the matchups between players in the form of a table.
 */
class ScoreBoard extends React.Component {
  headerFormat = {
    //width: "20%",
    //margin: "40px",
    border: "1px solid",
    //margin: "20px"
    height: "15px"
  };

  pStyle = {
    fontSize: "15px",
    //textAlign: "center",
    display: "inline"
    //margin: "20px"
  };

  matchupsFormat = {
    height: "40px",
    border: "1px solid"
    //display: "inline-block"
    //marginLeft: "5px"
  };

  state = {
    players: this.props.players,
    roundPlayers: this.props.players,
    roundNum: 0,
    rounds: Math.log(this.props.players.length) / Math.log(2) + 1
  };
  render() {
    return (
      <div>
        <h4>{this.props.tournamentName}</h4>
        {this.createHeader()}
        {this.test()}
      </div>
    );
  }

  createHeader() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner
    let headerRow = [];

    for (let i = 1; i < rounds; i++) {
      headerRow.push(
        <p key={i} style={this.pStyle}>
          Round {i}
        </p>
      );
    }
    headerRow.push(
      <p key="700" style={this.pStyle}>
        Winner!
      </p>
    );
    return <div style={this.headerFormat}>{headerRow}</div>;
  }

  test() {
    //let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner
    while (this.state.roundNum !== this.state.rounds) {
      this.printNames();
      this.state.roundNum = this.state.roundNum + 1; //----change to setstate after testing----
    }
  }

  printNames() {
    let players = this.state.players;
    let randomizePlayers = this.shuffle(players);
    let formattedPlayers = [];
    let winners = [];
    // let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner

    //console.log(randomizePlayers[3].name);

    for (let i = 0; i < randomizePlayers.length; i = i + 2) {
      formattedPlayers.push(
        //change height here for base height * round #
        <div key={i * 2} style={this.matchupsFormat}>
          <div key={i}>{randomizePlayers[i].name}</div>
          <div key={i + 1}>{randomizePlayers[i + 1].name}</div>
        </div>
      );
      winners = this.pickWinner(i, i + 1);
    }
    console.log({ winners });
    //this.state.players = randomizePlayers; //pick wiiner here

    return formattedPlayers;
  }

  pickWinner(player1, player2) {
    return 0.5 - Math.random() < 0 ? player1 : player2;
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

export default ScoreBoard;
