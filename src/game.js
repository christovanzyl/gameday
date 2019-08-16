import React, {Component} from 'react';
import './App.css';


const PlayerCard = ({color, symbol}) => {
  const style = {
    backgroundColor: color,
    backgroundImage:  "url(./img/" + symbol + ".png)"
  }
  return(
    <div style={style} className="player-card">
    </div>
  )
}
export default class Game extends Component {

  constructor(props) {
    super(props)
    this.symbols = ["Rock", "Paper", "Scissors"]
    this.state = {}
  }

  decideWinner = () => {
    const {playerBlue, playerRed} = this.state
    if(playerRed == playerBlue) {
      return "it's a draw !"
    }
    if((playerBlue==="Rock" && playerRed==="Scissors") ||
       (playerBlue==="Paper" && playerRed==="Rock") ||
       (playerBlue==="Scissors" && playerRed==="Paper")) {
        return "Blue player wins !"
       }
        return "Red player wins !"       
  }

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
            <button>Restart</button>
          </div>          
        </div>
      </div>
    );
  }
}