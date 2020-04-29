import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
  render() {
    return(
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">Hangman</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/Lights-Out">Lights Out</NavLink>        
      </div>
    )
  }
}

export default Navbar;