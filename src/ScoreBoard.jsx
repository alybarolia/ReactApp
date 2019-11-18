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
    rounds: Math.log(this.props.players.length) / Math.log(2),
    formattedPlayers: []
  };
  render() {
    return (
      <div>
        <h4>{this.props.tournamentName}</h4>
        {this.createHeader()}
        {this.printNames(this.state.players)}
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

  printNames(players) {
    //let formattedPlayers = [];
    let winners = [];

    //could be roundnumber issue
    let randomizePlayers = this.shuffle(players);

    if (randomizePlayers.length <= 1) {
      //console.log("here now");
      winners = randomizePlayers[0];
      this.state.formattedPlayers.push(
        //change height here for base height * round #
        <div key="900" style={{ width: "60px", height: "20px" }}>
          {randomizePlayers[0].name}
        </div>
      );
    } else {
      //this.state.formattedPlayers = [];
      //winners = [];
      for (let i = 0; i < randomizePlayers.length; i = i + 2) {
        this.state.formattedPlayers.push(
          //change height here for base height * round #
          <div key={i * 2}>
            <div
              key={i}
              style={{
                width: "60px",
                height: "20px",
                marginLeft: "20" * 2 * this.state.roundNum + "px"
              }}
            >
              {randomizePlayers[i].name}
            </div>
            <div
              key={i + 1}
              style={{
                width: "60px",
                height: "20px",
                marginLeft: "20" * 2 * this.state.roundNum + "px"
              }}
            >
              {randomizePlayers[i + 1].name}
            </div>
          </div>
        );

        let roundWinner = this.pickWinner(
          randomizePlayers[i],
          randomizePlayers[i + 1]
        );

        winners.push(roundWinner);

        // holds the winners but not printing them out
        //create a function that passes winners and round number then prints it

        //console.log(randomizePlayers);
      }
      console.log(winners);
      this.state.roundNum = this.state.roundNum + 1;
      //randomizePlayers = winners;
      console.log(this.state.roundNum);
    }
    while (this.state.roundNum !== this.state.rounds) {
      this.printNames(winners);
    }

    //this.state.players = winners;

    return this.state.formattedPlayers;
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