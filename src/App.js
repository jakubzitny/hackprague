import React, { Component } from 'react';

import Nav from './Nav'
import Header from './header/Header'
import PastYears from './header/PastYears'
import Countdown from './countdown/Countdown'
import Sponsors from './sponsors/Sponsors'
import Footer from './footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PastYears />
        <Header />
        <Countdown />
        {/* <Prizes /> */}
        {/* <Venue /> */}
        {/* <Speakers /> */}
        {/* <Faq /> */}
        <Sponsors />
        {/* <Team /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
