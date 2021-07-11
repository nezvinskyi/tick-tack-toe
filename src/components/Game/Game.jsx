import React, { Component } from 'react';
import Board from '../Board/Board';

class Game extends Component {
  constructor() {
    super();
    this.status = 5;
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{this.status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
