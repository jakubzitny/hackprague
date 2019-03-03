import React, { Component } from 'react'
import styled from 'styled-components'

const SpeakerWrapper = styled.div`
  margin: 0 0 97px 64px;

  @media (max-width: 1024px) {
    margin: 30px 20px;
  }
`

// TODO
const SpeakerName = styled.div`
  word-spacing: 300px;
  width: 300px;

  margin: 0 0 -100px -50px;
  color: #4A4A4A;

  /* text-shadow: 2px 2px var(--main-color); */
  /* color: var(--main-color); */
  /* text-shadow: 0px 0px 1px var(--main-color-2); */

  font-family: Futura;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;

  opacity: 1;

  @media (max-width: 1024px) {
    margin: 0;
    word-spacing: normal;
    width: 90vw;
  }
`

const SpeakerText = styled.p`
  width: 412px;

  @media (max-width: 425px) {
    width: 385px;
  }

  @media (max-width: 375px) {
    width: 335px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`


export default class Speaker extends Component {
  render() {
    const { photo, name, desc, link } = this.props.data


    const SpeakerPhoto = styled.a`
      display: block;
      width: 412px;
      height: 412px;

      background-image: url(${`${this.props.selector}/${photo}`});
      background-color: rgba(32, 69, 156, 0.9);
      background-blend-mode: screen;
      background-repeat: no-repeat;

      background-size: contain;

      @media (max-width: 425px) {
        width: 385px;
        height: 385px;
      }

      @media (max-width: 375px) {
        width: 335px;
        height: 335px;
      }

      @media (max-width: 320px) {
        width: 280px;
        height: 280px;
      }
    `

    return (
      <SpeakerWrapper>
        <SpeakerName>{ name }</SpeakerName>
        {link && <SpeakerPhoto href={link} />}
        {!link && <SpeakerPhoto />}
        <SpeakerText>{ desc }</SpeakerText>
      </SpeakerWrapper>
    )
  }
}
