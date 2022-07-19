import "./Games.scss";
import React, { Component } from "react";
import games from "../../util/games.json";

export class NewGames extends Component {
  render() {
    return (
      <div className="gameDivContainer">
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <img alt="" src={game.image} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NewGames;
