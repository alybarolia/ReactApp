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
    height: "20px"
  };

  pStyle = {
    fontSize: "15px",
    //textAlign: "center",
    display: "inline",
    width: "70px"
    //margin: "20px"
  };

  matchupsFormat = {
    height: "40px",
    border: "1px solid"
    //display: "inline-block"
    //marginLeft: "5px"
  };

  displayFormat1 = {
    //display: "inline",
    width: "70px"
  };
  displayFormat2 = {
    display: "inline-block",
    width: "70px"
  };

  state = {
    players: this.props.players,
    roundPlayers: this.props.players,
    roundNum: 0,
    rounds: Math.log(this.props.players.length) / Math.log(2) + 1,
    formattedPlayers: [],
    count: 0
  };
  render() {
    return (
      <div key={Math.random()}>
        <h4>{this.props.tournamentName}</h4>
        {this.createHeader()}
        <div key={Math.random()}>{this.printNames(this.state.players)}</div>
      </div>
    );
  }

  createHeader() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner
    let headerRow = [];
    let count = 0;

    for (let i = 1; i < rounds; i++) {
      headerRow.push(
        <div
          key={Math.random()}
          style={{
            margin: "7" + "px",
            fontSize: "15px",
            display: "inline",
            width: "70px",
            textAlign: "center"
          }}
        >
          Round {i + "    "}
        </div>
      );
    }

    headerRow.push(
      <div
        key="700"
        style={{
          //marginLeft: "70" * { rounds } + "px",
          fontSize: "15px",
          display: "inline",
          width: "70px",
          textAlign: "center"
        }}
      >
        Winner!
      </div>
    );
    return (
      <div key={Math.random()} style={{ border: "1px solid" }}>
        {headerRow}
      </div>
    );
  }

  printNames(players) {
    //let formattedPlayers = [];
    let winners = [];
    let randomizePlayers = players;
    //let count = 0;
    //could be roundnumber issue
    if (randomizePlayers.length === this.state.players) {
      randomizePlayers = this.shuffle(players);
    }

    if (randomizePlayers.length <= 1) {
      winners = randomizePlayers[0];
      this.state.formattedPlayers.push(
        //change height here for base height * round #
        <div key="900" style={this.displayFormat2}>
          {randomizePlayers[0].name}
        </div>
      );
    } else {
      //this.state.formattedPlayers = [];
      //winners = [];

      for (let i = 0; i < randomizePlayers.length; i = i + 2) {
        if (i >= randomizePlayers.length - 2) {
          this.state.count = this.state.count + 1;
          console.log("new count" + this.state.count);
        }
        console.log("round:" + this.state.roundNum);
        //console.log(this.state.count);
        this.state.formattedPlayers.push(
          //change height here for base height * round #
          <div
            key={Math.random()}
            style={
              this.state.count === this.state.roundNum
                ? this.displayFormat1
                : this.displayFormat2
            }
          >
            <div
              key={Math.random()}
              style={{
                width: "70px",
                //height: "20px",
                //marginLeft: "70" * this.state.roundNum + "px",
                textAlign: "center"
              }}
            >
              {randomizePlayers[i].name}
            </div>
            <div
              key={Math.random()}
              style={{
                width: "70px",
                //height: "20px",
                //marginLeft: "70" * this.state.roundNum + "px",
                textAlign: "center"
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
      }
      this.state.roundNum = this.state.roundNum + 1;
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
