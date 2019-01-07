import React, { Component } from 'react'
import styled from 'styled-components'

import WrappedContainer from '../WrappedContainer'

const PrizesLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

`

const PrizeTitle = styled.div`
`

const PrizeItem = styled.div`
  font-family: Futura;
  font-weight: 700;
  color: #4a4a4a;
`

const Prize = styled.div`
  line-height: 36px;
  font-size: 36px;
  text-transform: uppercase;
`

const PrizeMore = styled.div`
  line-height: 32px;
  font-size: 27px;
  text-transform: uppercase;
`

const Type = styled.div`
  font-size: 18px;
`

// const PrizeComment = styled.div`
//   width: 243px;
//   font-family: Rockwell;
//   font-size: 17px;
//   font-weight: 400;
//   line-height: 23px;
// `

const PrizesRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  box-sizing: border-box;
  padding-left: 64px;
`

const PrizesTrophy = styled.div`
  width: 272px;
  height: 272px;

  /* TODO */
  margin-bottom: 72px;

  background: url('trophy.svg');
`

export default class Prizes extends Component {
  _handleApplyClick = () => {
    console.warn('TODO: apply')
  }

  _handleSponsoredPrizesClick = () => {
    console.warn('TODO: sponzored prizes')
  }

  render() {
    return (
      <WrappedContainer>
        <PrizesLeft>
          <PrizeTitle className="item title">PRIZES</PrizeTitle>
          <PrizeItem className="item">
            <Prize>50000 CZK</Prize>
            <Type>Grand prize</Type>
          </PrizeItem>
          <PrizeItem className="item">
            <Prize>30000 CZK</Prize>
            <Type>2nd place prize</Type>
          </PrizeItem>
          <PrizeItem className="item">
            <Prize>10000 CZK</Prize>
            <Type>3rd place prize</Type>
          </PrizeItem>
          <PrizeItem className="item">
            <PrizeMore>And more</PrizeMore>
          </PrizeItem>
          {/* <PrizeComment className="item">
            To make things even more interesting, we’ve partnered up with Br41n.io, JetBrains, Bloomberg and Kiwi.com in order to bring you even more exciting rewards.
            <br />
            <a href="#sponsored-prizes" className="underlined" onClick={this._handleSponsoredPrizesClick}>show sponsored prizes</a>
          </PrizeComment> */}
        </PrizesLeft>
        <PrizesRight>
          <PrizesTrophy />
          {/* <PrizeItem className="item">
            <PrizeMore>Get accelerated</PrizeMore>
          </PrizeItem>
          <PrizeComment className="item">
            Our partner <b>StartupYard</b> will offer <b>up to 5 teams</b> the possibility to receive <b>€30,000</b> investment and the opportunity to be <b>accelerated for 3 months</b> in Sept - Nov 2018.
          </PrizeComment> */}
        </PrizesRight>
      </WrappedContainer>
    )
  }
}
