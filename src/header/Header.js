import React, { Component } from 'react'
import styled from 'styled-components'

import Head from './Head'


const HeaderWrapper = styled.header`
  background-color: var(--main-color);
  height: 770px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const HeaderLeft = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Perex = styled.p`
  width: 225px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  font-family: "Rockwell";
  margin: 35px 0;
  line-height: 27px;
`

const Strong = styled.span`
  color: var(--main-color-2);
  font-weight: 600;
`

const ButtonWrapper = styled.div`
  width: 225px;
  display: flex;
  justify-content: flex-start;
`

const ApplyButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: var(--main-color-2);
  text-transform: uppercase;
  color: var(--main-color);
  font-weight: 800;
  font-size: 22px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const City = styled.div`
  width: 700px;
  height: 500px;
  /* border: 1px solid var(--main-color-2); */
  background: url('illustration.svg');
  background-repeat: no-repeat;
`

const Claim = styled.h1`
  color: var(--main-color-2);
  text-transform: lowercase;
  font-weight: 700;
  font-size: 36px;

  margin: 50px 0 5px 0;
`

const Subclaim = styled.h3`
  color: var(--main-color-2);
  text-transform: lowercase;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`



export default class Header extends Component {
  _onApplyClick = () => {
    console.warn('TODO: apply')
  }

  render() {
    return (
      <HeaderWrapper className="App-header" data-ui="App-header">
        <HeaderLeft>
          <Head />
          <Perex>
            This year, we’ve decided to go with one&nbsp;main&nbsp;theme — <Strong>Smart&nbsp;cities</Strong> — instead of&nbsp;dividing the hackathon into multiple categories.
          </Perex>
          <ButtonWrapper>
            <ApplyButton onClick={this._onApplyClick}>Apply</ApplyButton>
          </ButtonWrapper>
        </HeaderLeft>
        <HeaderRight>
          <City />
          <Claim>the future is already here</Claim>
          <Subclaim>it's up to us to distribute it equally</Subclaim>
          {/* <Nav /> */}
        </HeaderRight>
      </HeaderWrapper>
    )
  }
}
