import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Menu from './Menu'
import Speakers from './Speakers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        {/* <Speakers /> */}
      </div>
    );
  }
}

export default App;
