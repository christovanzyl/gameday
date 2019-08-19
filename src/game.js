import React, {Component} from 'react';
import './App.css';
// linked a folder that contains images used in the game
import Rock from "./img/rock.png"
import Paper from "./img/paper.png"
import Scissors from "./img/scissors.png"

// a list that holds the color and images for the game
const PlayerCard = ({color, symbol}) => {
  const style = {
    backgroundColor: color,
    backgroundImage:  `url(${symbol})`
  }
// returning the information of the list above 
  return(
    <div style={style} className="player-card">
    </div>
  )

}
// a comonent that holds the content of the game that is being played
export default class Game extends Component {

    constructor(props) {
    super(props)
    this.symbols = [Rock, Paper, Scissors]
    this.state = {}
  }
// a function that allows the server to understand the rules of the game
  decideWinner = () => {
    const {playerBlue, playerRed} = this.state
    if(playerRed == playerBlue) {
      return "it's a draw !"
    }
    if((playerBlue===Rock && playerRed===Scissors) ||
       (playerBlue===Paper && playerRed===Rock) ||
       (playerBlue===Scissors && playerRed===Paper)) {
        return "Blue player wins !"
       }
        return "Red player wins !"       
  }
// lets the server know how much time it should run the chances before revealing the final outcome
  runGame = () => {
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random()*3)],
        playerBlue: this.symbols[Math.floor(Math.random()*3)],
        winner: ""
      })
      if(counter > 10) {
        clearInterval(myInterval)
        this.setState({winner: this.decideWinner()})
      }
    },100)     
  }

// diplays the information of the game that is played
  render() {
    return(
      <div className="App">
        <div>
          <div>
            <PlayerCard
              color="red"
              symbol={this.state.playerRed} />
              
            <PlayerCard
              color="Blue"
              symbol={this.state.playerBlue} />
              <p>{this.state.winner}</p>
            <button onClick={this.runGame}>Run Game</button>
          </div>          
        </div>
      </div>
    );
  }
}