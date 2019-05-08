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

const PrizeComment = styled.div`
  width: 243px;
  font-family: Rockwell;
  font-size: 17px;
  font-weight: 400;
  line-height: 23px;
`

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

  @media (max-width: 375px) {
    display: none;
  }
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
            <Type>Winner — <a href="https://devpost.com/software/smart-traffic-5b9lk6" target="_blank" rel="noopener noreferrer">Smart Trafic</a></Type>
          </PrizeItem>
          <PrizeItem className="item">
            <Prize>30000 CZK</Prize>
            <Type>2nd place prize</Type>
            <Type>Winner — <a href="https://devpost.com/software/park-and-roll" target="_blank" rel="noopener noreferrer">Park & Roll</a></Type>
          </PrizeItem>
          <PrizeItem className="item">
            <Prize>10000 CZK</Prize>
            <Type>3rd place prize</Type>
            <Type>Winner — <a href="https://devpost.com/software/park-me-0ce58j" target="_blank" rel="noopener noreferrer">Park.me</a></Type>
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
          <PrizeItem className="item">
            <PrizeMore>Special prizes</PrizeMore>
          </PrizeItem>
          <PrizeComment className="item">
            <b>Veeam</b> will offer <b>500GB external Samsung SSD T5</b> for each member of team with the best project written in C#.
            Winner — <a href="https://devpost.com/software/cyclock" target="_blank" rel="noopener noreferrer">CycLock</a>.
          </PrizeComment>
          <PrizeComment className="item">
            <b>Here Technologies</b> will bring Amazon Echos and secure backpacks for the best team using Here maps.
            Winner — <a href="https://devpost.com/software/love-hate-and-prague" target="_blank" rel="noopener noreferrer">Czech Utopia Group</a>.
          </PrizeComment>
          <PrizeComment className="item">
            <b>Kiwi</b> will add <b>100 EUR flight vouchers</b> for each team member of winning team.
          </PrizeComment>
          <PrizeComment className="item">
            <b>Reactive Conf</b> will also invite the winning team to this year's conference.
          </PrizeComment>
        </PrizesRight>
      </WrappedContainer>
    )
  }
}
