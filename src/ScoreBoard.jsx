import React from "react";

/**
 * This Component is responsible for displaying the matchups between players in the form of div tags.
 */
class ScoreBoard extends React.Component {
  state = {
    players: this.props.players,
    roundPlayers: this.props.players,
    roundNum: 0,
    rounds: Math.log(this.props.players.length) / Math.log(2) + 1,
    formattedPlayers: []
  };

  /**
   * This method is responsible for calling the methods required for printing the matchuos bracket
   *
   * @param None
   * @returns a DOM element of the bracket
   */
  render() {
    return (
      <div key={Math.random()}>
        <h4>{this.props.tournamentName}</h4>
        {this.createHeader()}
        <div key={Math.random()}>{this.printNames(this.state.players)}</div>
      </div>
    );
  }

  /**
   * This method is responsible for printing the header row for the amounts of rounds there are in the
   * tournament.
   *
   * @param None
   * @returns a DOM element that prints the rounds in the table
   */
  createHeader() {
    let rounds = Math.log(this.props.players.length) / Math.log(2) + 1; // number of rounds required plus 1 for winner
    let headerRow = [];
    let count = 0;

    for (let i = 1; i < rounds; i++) {
      console.log("here" + i);
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
    console.log("final");
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

  /**
   * This method is responsible for printing the matchups for the tournament in a bracket-like format.
   *
   * @param None
   * @returns a DOM element that prints the matchups in the form of a bracket
   */
  printNames(players) {
    //let formattedPlayers = [];
    let playerHolder = [];
    let winners = [];
    let randomizePlayers = players;
    //could be roundnumber issue
    if (randomizePlayers.length === this.state.players) {
      randomizePlayers = this.shuffle(players);
    }

    if (randomizePlayers.length <= 1) {
      //console.log("here now");
      winners = randomizePlayers[0];
      playerHolder.push(
        <div
          key="900"
          style={{
            width: "70px",
            marginTop: "15" * this.state.roundNum + "px",
            //marginBottom: "20" * this.state.roundNum + "px",

            //marginLeft: "70" * this.state.roundNum + "px",
            textAlign: "center"
          }}
        >
          {randomizePlayers[0].name}
        </div>
      );
    } else {
      for (let i = 0; i < randomizePlayers.length; i = i + 2) {
        playerHolder.push(
          //change height here for base height * round #
          <div key={Math.random()}>
            <div
              key={Math.random()}
              style={{
                width: "70px",
                height: "20px",
                marginTop: "20" * this.state.roundNum + "px",

                textAlign: "center"
              }}
            >
              {randomizePlayers[i].name}
            </div>
            <div
              key={Math.random()}
              style={{
                width: "70px",
                height: "20px",
                marginTop: "20" * this.state.roundNum + "px",
                //marginBottom: "20" * this.state.roundNum + "px",
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

        // holds the winners but not printing them out
        //create a function that passes winners and round number then prints it

        //console.log(randomizePlayers);
      }
      console.log(winners);
    }
    this.state.formattedPlayers.push(
      <div
        key={Math.random()}
        style={{
          display: "inline-block",
          verticalAlign: "middle"
          //paddingBottom: "20" * this.state.roundNum + "px"

          //alignItems: "center"
          //display: "block"
          //marginLeft: "auto",
          //marginRight: "auto"

          //flex: 1
          //marginBottom: "70" * this.state.roundNum + "px"
        }}
      >
        {playerHolder}
      </div>
    );
    this.state.roundNum = this.state.roundNum + 1;

    while (this.state.roundNum !== this.state.rounds) {
      this.printNames(winners);
    }

    //this.state.players = winners;

    return this.state.formattedPlayers;
  }

  /**
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

export default ScoreBoard;
