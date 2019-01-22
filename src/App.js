import React, { Component } from 'react';
import { List } from 'immutable'
import { Element as ScrollElement, scroller, scrollSpy } from 'react-scroll'

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
  menuItems = List.of(
    'Home',
    'Timeline',
    'Prizes',
    'Venue',
    'Speakers',
    'FAQ',
    'Sponsors',
    'Team',
    'Contact'
  )

  _handleApplyClick = () => {
    const TYPEFORM_URL = 'https://hackprague.typeform.com/to/iQA72L'

    window.open(TYPEFORM_URL, '_blank')
  }

  _scrollTo(menuItem, offset = 0) {
    scroller.scrollTo(menuItem, {
      duration: 500,
      smooth: true,
      offset,
    })
  }

  _getActiveMenuItem() {
    const menuItem = window.location.hash.substr(1)
    const lowerCaseMenuItems = this.menuItems.map((menuItem) => menuItem.toLowerCase())
    if (window.location.hash && lowerCaseMenuItems.contains(menuItem.toLowerCase())) {
      return menuItem
    }

    return 'Home'
  }

  componentDidMount() {
    const menuItem = window.location.hash.substr(1)
    const lowerCaseMenuItems = this.menuItems.map((menuItem) => menuItem.toLowerCase())
    if (window.location.hash && lowerCaseMenuItems.contains(menuItem.toLowerCase())) {
      this._scrollTo(menuItem)
    }

    scrollSpy.update();
  }

  _handleMoreClick = () => {
    this._scrollTo('Timeline', 150)
  }

  _handleMenuItemClick = (menuItem) => {
    // this._scrollTo(menuItem)
    // window.location.hash = `#${menuItem}`
  }

  render() {
    return (
      <div className="App">
        <Nav onMenuItemClick={this._handleMenuItemClick} menuItems={this.menuItems} activeMenuItem={this._getActiveMenuItem()} />
        <ScrollElement name="Home">
          <Header onMoreClick={this._handleMoreClick} onApplyClick={this._handleApplyClick} />
        </ScrollElement>
        <ScrollElement name="Timeline">
          <Countdown onApplyClick={this._handleApplyClick} ref={this.countdownRef} />
        </ScrollElement>
        <ScrollElement name="Prizes">
        {/* <ScrollLink activeClass="active" to="test1" spy={true} > */}
          <Prizes />
        {/* </ScrollLink> */}
        </ScrollElement>
        <ScrollElement name="Venue">
          <Venue />
        </ScrollElement>
        <ScrollElement name="Speakers">
          <Speakers />
        </ScrollElement>
        <ScrollElement name="FAQ">
          <Faq />
        </ScrollElement>
        <ScrollElement name="Sponsors">
          <Sponsors />
        </ScrollElement>
        <ScrollElement name="Team">
          <Speakers selector="team" />
        </ScrollElement>
        <ScrollElement name="Contact">
          <Footer />
        </ScrollElement>
      </div>
    );
  }
}

export default App;


