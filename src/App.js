import React, {Component} from 'react';
import './App.css';
import About from './about'
import Help from './help'
import Game from './game'
import './pic1.jpg'
import './pic2.jpg'
import './pic3.jpg'
import './pic4.jpg'
// a map that contains imgages
const user = {
    picture1: require ('./pic1.jpg'),
    picture2: require ('./pic2.jpg'),
    picture3: require ('./pic3.jpg'),
    picture4: require ('./pic4.jpg'),
}




class App extends Component {
  // a prompt that allows the user to enter the game
  state = {
    name: prompt('Enter player name')
  }
  
  render() {
    return(
      <div>
        {/* a header */}
        <h1>ROCK PAPER SCISSORS</h1>
        {/* where the inputted prompt is displayed */}
        <h3>Welcome...{this.state.name}</h3>
        <div>
          {/* a component for the game page to display */}
          <Game />
        </div>
        <h2>The Creation of Rock Paper Scissors</h2>      
        <div>
          {/* a component for the about page to display */}
          <About />
        </div>
        <h2>What are the rules of RPS?</h2>
        <div>
          {/* a component for the help page to display */}
          <Help />
        </div>
          <h2>The Real story</h2>
          {/* the images that the map contains */}
          <div className="img"><img src={user.picture1} /></div>
          <div className="img"><img src={user.picture2} /></div>
          <div className="img"><img src={user.picture3} /></div>
          <div className="img"><img src={user.picture4} /></div>
        </div>
    )
  }
}

export default App;
