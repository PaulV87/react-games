import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Hangman from './Hangman/Hangman';
import Board from './LightsOut/Board';
import Controller from './Controller';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Hangman />} />
        <Route exact path="/Lights-Out" render={() => <Board />} />
      </Switch>
      <Link></Link>
     
    </div>
  );
}

export default App;
