import React, { Component } from 'react';

import Nav from './Nav'
import Header from './header/Header'
import Countdown from './countdown/Countdown'
import Venue from './venue/Venue'
import Speakers from './speakers/Speakers'
import Prizes from './prizes/Prizes'
import Faq from './faq/Faq'
import Sponsors from './sponsors/Sponsors'
import Footer from './footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Countdown />
        <Prizes />
        <Venue />
        <Speakers />
        <Faq />
        <Sponsors />
        <Speakers selector="team" />
        <Footer />
      </div>
    );
  }
}

export default App;


