import React, { Component } from 'react'
import { List } from 'immutable'
import styled from 'styled-components'
import classNames from 'classnames'

const NavWrapper = styled.div`
  position: fixed;
  height: 320px;
  right: 20px;
  top: 20%;

  background: var(--main-color);

  display: flex;
  flex-direction: column;
`

const MenuItem = styled.a`
  display: block;
  margin: 0 62px;

  text-decoration: none;
  text-transform: lowercase;
  text-align: right;
  line-height: 28px;
  font-family: "Futura";
  font-size: 18px;
  font-weight: 700;
  color: white;

  &:visited, &:link {
    color: white;
  }

  &.active {
    color: var(--main-color-2);
    font-size: 36px;
    /* line-height: 52px; */
    margin: 20px 0;

    &::after {
      content: '';
      display: inline-block;
      vertical-align: bottom;
      margin-left: 30px;
      background-color: var(--main-color-2);
      width: 32px;
      height: 32px;
    }
  }

  &:hover {
    color: var(--main-color-2);
    opacity: 0.9;
    cursor: pointer;
  }
`

export default class Nav extends Component {
  state = {
    active: 'Home',
  }

  _isActive(item) {
    return item === this.state.active
  }

  render() {
    const menuItems = List.of(
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

    return (
      <NavWrapper>
         {menuItems.map((menuItem, i) => (
          <MenuItem key={`id-${i}`} href={`#${menuItem}`} className={classNames({ 'active': this._isActive(menuItem) })}>{menuItem}</MenuItem>
        ))}
      </NavWrapper>
    )
  }
}
