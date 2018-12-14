import React, { Component } from 'react'
import { List } from 'immutable'
import styled from 'styled-components'

import data from '../data.json'

import Speaker from './Speaker'
import WrappedContainer from '../WrappedContainer'

const SpeakersLeft = styled.div`
  font-family: Rockwell;

  width: 50%;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin-top: 32px;
`

const Text = styled.div`
  margin: 0 0 96px 64px;
  & p {
    width: 360px;
  }
`

const SpeakersRight = styled.div`
  font-family: Rockwell;

  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`


// TODO bg alignment
export default class Speakers extends Component {
  static defaultProps = {
    selector: 'speakers',
  }

  _fetchSpeakers() {
    const speakers = List(data[this.props.selector])
    const halfSize = Math.floor(speakers.size / 2)

    return [
      speakers.splice(0, halfSize),
      speakers.splice(halfSize),
    ]
  }

  _renderSpeaker = (data, i) => {
    return (
      <Speaker key={`${this.props.selector}-${i}`} data={data} selector={this.props.selector} />
    )
  }

  _getTitleText() {
    if (this.props.selector === 'speakers') {
      return 'Speakers & Judges'
    }

    return 'Hackprague Team'
  }

  render() {
    const [ speakers1, speakers2 ] = this._fetchSpeakers()

    return (
      <WrappedContainer wider>
        <SpeakersLeft>
          <Title className="item title">{this._getTitleText()}</Title>
          <Text>
            <p>Our panels will consist of reprezentatives of world-class companies, e.g. Facebook, Google, Blocknify, StartupYard, CEE Hacks and Startup Summit.</p>
          </Text>

          {speakers1.map(this._renderSpeaker)}
        </SpeakersLeft>
        <SpeakersRight>
          {speakers2.map(this._renderSpeaker)}
        </SpeakersRight>
      </WrappedContainer>
    )
  }
}
