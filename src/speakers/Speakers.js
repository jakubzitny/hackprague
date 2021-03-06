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

  @media (max-width: 1024px) {
    width: 100vw;
    align-items: center;
  }

  @media (max-width: 425px) {
    align-items: normal;
  }

  margin-bottom: 10px;
`

const Title = styled.div`
  margin-top: 32px;

  @media (max-width: 1024px) {
    text-align: left;
  }
`

const Text = styled.div`
  margin: 0 0 96px 64px;
  & p {
    width: 80vw;
  }

  @media (max-width: 1024px) {
    margin: 10px 20px;
    box-sizing: content-box;
  }
`

const SpeakersRight = styled.div`
  font-family: Rockwell;

  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 40px;

  @media (max-width: 1024px) {
    width: 100vw;
    align-items: center;
  }

  @media (max-width: 425px) {
    align-items: normal;
  }
`


// TODO bg alignment
export default class Speakers extends Component {
  static defaultProps = {
    selector: 'speakers',
  }

  _fetchSpeakers() {
    const speakers = List(data[this.props.selector])
    const halfSize = Math.ceil(speakers.size / 2)

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
          {(this.props.selector === 'speakers') &&<p>Our panels will consist of representatives of world-class companies.</p>}
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
