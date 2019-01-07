import React, { Component } from 'react'
import styled from 'styled-components'

import Head from './Head'
import PastYears from './PastYears'


const HeaderWrapper = styled.header`
  background-color: var(--main-color);
  height: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

  color: white;
  font-family: "Rockwell";
`

const HeaderTop = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

  display: none;
`

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const City = styled.div`
  width: 700px;
  height: 500px;
  /* border: 1px solid var(--main-color-2); */
  background: url('illustration.svg');
  background-repeat: no-repeat;
`


const TextsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Claim = styled.h1`
  color: var(--main-color-2);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;

  margin: 50px 0 5px 0;
`

const Subclaim = styled.h3`
  color: var(--main-color-2);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`


const Quotes = styled.div`
  width: 100%;
  padding: 50px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 17px;
  line-height: 23px;
  text-align: left;

  @media (max-width: 750px) {
    display: none;
  }
`

const Quote = styled.div`
  height: fit-content;
  display: flex;

  & p {
    width: 220px;
    margin: 0;
  }

  &:nth-of-type(2) p {
    width: 370px;
  }

  @media (max-width: 1160px) {
    &:nth-of-type(2) p {
      display: none;
    }
  }


`

const QuoteBar = styled.div`
  width: 30px;
  margin: 0 30px;
  background-color: var(--main-color-2);
`


const MoreWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 750px) {
    margin-top: 50px;
  }

`

const More = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: var(--main-color-2);
  margin-bottom: 10px;
`

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid var(--main-color-2);
`

export default class Header extends Component {
  _handleMoreClick = () => {
    console.warn('TODO: scroll')
  }

  render() {
    return (
      <HeaderWrapper className="App-header" data-ui="App-header">
        <HeaderTop>
          <HeaderLeft>
            <PastYears />
            <Head />
            <Perex>
              {/* This year, we’ve decided to go with one&nbsp;main&nbsp;theme — <Strong>Smart&nbsp;cities</Strong> — instead of&nbsp;dividing the hackathon into multiple categories. */}
              This year we've decided to go with one main challenge: <Strong>"Use available data to improve the quality of life in cities”</Strong>.
            </Perex>
            <ButtonWrapper>
              <ApplyButton onClick={this.props.onApplyClick}>Apply</ApplyButton>
            </ButtonWrapper>
          </HeaderLeft>
          <HeaderRight>
            <City />
            {/* <Nav /> */}
          </HeaderRight>
        </HeaderTop>
        <TextsWrapper>
          <Claim>the future is already here</Claim>
          <Subclaim>it's up to us to distribute it equally</Subclaim>
        </TextsWrapper>
        <Quotes>
          <Quote>
            <QuoteBar />
            <p>Together, we were able to “touch the future” last year and now that “the future is already here, it’s up to us to distribute it equally”.</p>
          </Quote>
          <Quote>
            <QuoteBar />
            <p>Nowadays, there’s plenty of data available about anything you might have in mind, be it traffic, Earth’s surface or your own neighbourhood. Even if there’s little data available in a particular area, the latest technologies enable us to collect and process information with nearly real time speed. Although, it is now easier than ever to collect data, it has become increasingly challenging to analyze and use the data meaningfully.</p>
            <QuoteBar />
          </Quote>
          <Quote>
            <p>This year, we will all literally HackPrague and hopefully lot of other cities as this year’s challenge is to “use available data to improve the quality of life in cities”.</p>
            <QuoteBar />
          </Quote>
        </Quotes>
        <MoreWrapper onClick={this.props.onMoreClick}>
          <More>Go on, there's more</More>
          <Arrow />
        </MoreWrapper>
      </HeaderWrapper>
    )
  }
}
