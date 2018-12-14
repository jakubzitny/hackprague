import React, { Component } from 'react'
import styled from 'styled-components'

const SpeakerWrapper = styled.div`
  margin: 0 0 95px 64px;
`

// TODO
const SpeakerName = styled.div`
  word-spacing: 300px;
  width: 300px;

  margin: 0 0 -100px -50px;
  /* color: var(--main-color-2);
  text-shadow: 2px 2px var(--main-color); */
  color: var(--main-color);
  text-shadow: 2px 2px 5px var(--main-color-2);
  font-family: Futura;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;

  opacity: 1;
`

const SpeakerText = styled.p`
  width: 412px;
`


export default class Speaker extends Component {
  render() {
    const { photo, name, desc } = this.props.data


    const SpeakerPhoto = styled.div`
      width: 412px;
      height: 412px;

      background: url(${`${this.props.selector}/${photo}`});

      &::before {
        width: 412px;
        height: 412px;
      }
    `

    return (
      <SpeakerWrapper>
        <SpeakerName>{ name }</SpeakerName>
        <SpeakerPhoto className="blue-overlay" />
        <SpeakerText>{ desc }</SpeakerText>
      </SpeakerWrapper>
    )
  }
}
