import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App' onLoad={alert(
        `How To Play:
        
        In each turn a player may roll the dice up to three times. 
        A player doesn't have to roll all five dice on the second and third roll of a round, they may put as many dice as they want to the side and only roll the ones that don't have the numbers they're trying to get.
        In this game you click on the dice youn want to keep to save them, and click the Reroll button to re-roll the dice remaing.`
        )}>
        <Game />
      </div>
    );
  }
}

export default App;
