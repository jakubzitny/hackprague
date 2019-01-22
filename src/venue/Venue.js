import React, { Component } from 'react'
import styled from 'styled-components'

import WrappedContainer from '../WrappedContainer'

const VenueLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    order: 1;

    width: 100%;

    margin-bottom: 114px;
  }
`

const Venue1 = styled.div`
  width: 540px;
  height: 360px;

  background-image: url('venue2.png');
  background-color: rgba(32, 69, 156, 0.9);
  background-blend-mode: screen;

  margin-bottom: 64px;

  &::before {
    width: 540px;
    height: 360px;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 250px;

    background-size: contain;

    &::before {
      width: 375px;
      height: 250px;
    }
  }
`

const Venue2 = styled.div`
  width: 540px;
  height: 360px;

  background-image: url('venue.png');
  background-color: rgba(32, 69, 156, 0.9);
  background-blend-mode: screen;

  margin: 64px 0;

  &::before {
    width: 540px;
    height: 360px;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 250px;

    background-size: contain;
    margin-bottom: 10px;

    &::before {
      width: 375px;
      height: 250px;
    }
  }
`

const AnimSpacer = styled.div`
  height: 192px;

  @media (max-width: 375px) {
    height: 0;
  }
`

const VenueRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: 100%;
  }
`

const Pattern = styled.div`
  height: 192px;
  width: 96px;

  background: url('pattern.svg');
  background-position: 0 32px;
  background-repeat: no-repeat;
  transform: rotateX(180deg);
`

const VenueTitle = styled.div`
  margin-bottom: 32px;
`

const VenueTextSpacer = styled.div`
  height: 360px;
`

const VenueText = styled.div`

  & h3 {
    margin: 0;
    color: #4a4a4a;
    font-size: 27px;
    font-weight: 700;
  }

  & p {
    width: 381px;
    color: #4a4a4a;

    font-family: Rockwell;
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
  }

  & a {
    font-family: Rockwell;
  }

  @media (max-width: 375px) {
    width: 279px;

    & p {
      width: 279px;
    }
  }
`

// TODO 32 margin top exact
const Pattern2 = styled.div`
  height: 192px;
  width: 96px;

  background: url('pattern.svg');
  background-position: 0 32px;
  background-repeat: no-repeat;
  /* transform: rotateX(180deg); */

  @media (max-width: 375px) {
    display: none;
  }
`

const Pattern3 = styled.div`
  height: 67px;
  width: 96px;

  border-left: 32px solid var(--main-color);
  border-right: 32px solid var(--main-color);
  box-sizing: border-box;

  @media (max-width: 375px) {
    display: none;
  }
`

const Pattern4 = styled.div`
  height: 77px;
  width: 96px;

  border-left: 32px solid var(--main-color);
  box-sizing: border-box;

  @media (max-width: 375px) {
    display: none;
  }
`


export default class Venue extends Component {
  _handleApplyClick = () => {
    console.warn('TODO: apply')
  }

  _handleSponsoredVenueClick = () => {
    console.warn('TODO: sponzored Venue')
  }

  _getLocationHref = () => {
    return 'https://goo.gl/zVEKSC'
  }

  render() {
    return (
      <WrappedContainer wider>
        <VenueLeft>
          <AnimSpacer />
          <Venue1 />
          <VenueTextSpacer>
            <VenueText className="item">
              <p>
              CAMP's main mission is to improve the current form of public debate on the development of Prague.
              CAMP seeks to be an open platform, a “base camp” for anyone interested in the common planning and development of the capital city of the Czech Republic.
              IPR Prague is therefore offering CAMP space and facilities for use by third parties and encouraging all entities interested in developing the city to work together.
              </p>
            </VenueText>
            <VenueText className="item">
              <p>
              HackPrague is honered by the fact that CAMP provided us their facitilies to host HackPrague 2019.</p>
            </VenueText>
          </VenueTextSpacer>
          <Pattern2 />
          <Pattern3 />
          <Pattern4 />
        </VenueLeft>
        <VenueRight>
          <Pattern />
          <VenueTextSpacer>
            <VenueTitle className="item title">Venue</VenueTitle>
            <VenueText className="item">
              <h3>C enter for A rchitecture <br />and M etropolitan P lanning</h3>
              <p>Vyšehradská 51, Praha 2 <br /> Emmaus monastery</p>
              <a href={this._getLocationHref()} target="_blank" rel="noopener noreferrer" className="underlined">see location</a>
              <p>Metro: B, station: Karlovo náměstí <br /> Tram station: Moráň or Palackého náměstí</p>
            </VenueText>
          </VenueTextSpacer>
          <Venue2 />
        </VenueRight>
      </WrappedContainer>
    )
  }
}
