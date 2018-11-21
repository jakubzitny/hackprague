import React, { Component } from 'react';
import { List } from 'immutable'
import './App.css';

export default class Menu extends Component {
  render() {
    const menuItems = List.of(
      'Home',
      'About',
      'Contact'
    )

    return (
      <div className="App-menu">
        {menuItems.map((menuItem, i) => (
          <a className="App-menu-item" key={`id-${i}`} href={menuItem}>{menuItem}</a>
        ))}
      </div>
    );
  }
}
