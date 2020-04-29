import React, { Component } from 'react';
import Hangman from './Hangman/Hangman';
import Board from './LightsOut/Board';
import './Navbar.css';

class Controller extends Component { 
  static defaultProps = {
    menu : ["Hangman" ,"Lights Out"]
  }

  constructor(props){
    super(props);
    this.state = { active: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState({ active: evt.target.dataset.index})
  }

  render(){
    return(
      <div className="Controller-container">
        <div>
          <ul className="Navbar">
            { this.props.menu.map((item, id) => 
              <li 
                key={id} 
                data-index={id}
                className="Navbar-items"
                onClick={this.handleClick}
              >{item}</li>)}
          </ul>
        </div>
        <div>
          {
            {
              0 :  <Hangman />,
              1 :  <Board />          
            }[this.state.active]
          }
        </div>      
        
      </div>
    )
  }
}

export default Controller;