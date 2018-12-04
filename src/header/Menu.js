import React, { Component } from 'react';
import { List } from 'immutable'
import styled from 'styled-components'


const MenuWrapper = styled.div`
  width: 100%;
  height: 100px;
`

const MenuItem = styled.a`
  margin: 0 10px;
`

export default class Menu extends Component {
  render() {
    const menuItems = List.of(
      'Timeline',
      'Prizes',
      'Venue',
      'Speakers',
      'FAQ',
      'Sponsors',
      'Team'
    )

    return (
      <MenuWrapper>
        {menuItems.map((menuItem, i) => (
          <MenuItem key={`id-${i}`} href={menuItem}>{menuItem}</MenuItem>
        ))}
      </MenuWrapper>
    );
  }
}
