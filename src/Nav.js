import React, { Component } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import classnames from 'classnames'
import styled from 'styled-components'

const NavWrapper = styled.div`
  position: fixed;
  height: 288px;
  right: 20px;
  top: 20%;
  padding: 20px 0;

  background: var(--main-color);

  display: flex;
  flex-direction: column;


  & .link {
    display: block;
    margin: 0 62px;

    text-decoration: none;
    text-transform: lowercase;
    text-align: right;
    line-height: 32px;
    font-family: "Futura";
    font-size: 18px;
    font-weight: 700;
    color: white;
  }

  & .link:visited, & .link:link {
    color: white;
  }

  & .link.active {
    color: var(--main-color-2);
    /* font-size: 36px; */
    /* line-height: 52px; */
    margin: 0px 0;

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

  & .link:hover {
    color: var(--main-color-2);
    opacity: 0.9;
    cursor: pointer;
  }
`

export default class Nav extends Component {
  state = {
    active: this.props.activeMenuItem,
  }

  _isActive(item) {
    return item === this.state.active
  }

  _handleClick(menuItem) {
    // this.props.onMenuItemClick(menuItem)

    this.setState({
      active: menuItem,
    })
  }

  render() {
    return (
      <NavWrapper>
         {this.props.menuItems.map((menuItem, i) => (
          <ScrollLink
            spy={true}
            hashSpy={true}
            duration={500}
            smooth={true}
            to={menuItem}
            key={`id-${i}`}
            href={`#${menuItem}`}
            className={classnames({ active: this._isActive(menuItem), link: true }) }
            onSetActive={this._handleClick.bind(this, menuItem)}
            // onClick={this._handleClick.bind(this, menuItem)}
          >
            {menuItem}
          </ScrollLink>
        ))}
      </NavWrapper>
    )
  }
}
