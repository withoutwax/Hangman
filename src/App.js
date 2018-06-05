import React, { Component } from 'react';
import './App.css';

import Instruction from './components/Instruction';
import Guess from './components/Guess';
import Word from './components/Word';
import Helper from './components/Helper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Instruction />
        <Guess />
        <Word />
        <Helper />
      </div>
    );
  }
}

export default App;
