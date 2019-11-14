import React, { Component } from "react";

/**
 * This Class is responsible for starting and resetting a tournament.
 *
 */
class InitiateTournament extends Component {
  state = {};

  /**
   * This render method is respnsible for rendering the layout of the buttons. The button "Start Tournament"
   * dissapears once a tournament is already in progress.
   *
   * @param None
   */
  render() {
    return (
      <React.Fragment>
        {!this.props.isTournamentStarted && (
          <button onClick={this.props.onCreateBracket}>Start Tournament</button>
        )}
        <button onClick={this.props.onResetTournament}>Reset Tournament</button>
      </React.Fragment>
    );
  }
}

export default InitiateTournament;
