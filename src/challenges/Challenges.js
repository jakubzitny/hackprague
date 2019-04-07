import React, { Component } from 'react'
import { List } from 'immutable'
import styled from 'styled-components'

import data from '../data.json'

import WrappedContainer from '../WrappedContainer'
import Challenge from './Challenge'

const Title = styled.div`
  margin: 32px 0 96px 0 !important;
  height: 32px;
`

const ChallengesContainer = styled.div`
  width: 100%;
`

const ChallengesWrapper = styled.div`
  margin-top: 50px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  width: 100%;
  border: 32px solid var(--main-color);

  background-color: var(--main-color);

  @media (max-width: 768px) {
    width: 100vw;
    box-sizing: border-box;
  }
`

export default class Challenges extends Component {
  challengesRef: null
  state = {
    visibleChallengeId: null,
  }

  _fetchChallenges() {
    return List(data.challenges)
  }

  _handleVisibilityToggle = (challengeId) => {
    if (this.state.visibleChallengeId === challengeId) {
      challengeId = null
    }

    if (this.challengesRef && challengeId) {
      window.scrollTo(0, this.challengesRef.offsetTop - 100)
    }

    this.setState({
      visibleChallengeId: challengeId,
    })
  }

  _renderChallenge = (challenge, challengeId) => {
    return (
      <div
        key={`challenge-${challengeId}`}
      >
        <Challenge
          challenge={challenge}
          visible={challengeId === this.state.visibleChallengeId}
          onToggleRequest={() => {
            this._handleVisibilityToggle(challengeId)
          }}
        />
      </div>
    )
  }

  render() {
    const challenges = this._fetchChallenges()

    return (
      <WrappedContainer>
        <ChallengesContainer>
          <Title className="item title">Challenges</Title>
          <ChallengesWrapper
            ref={(ref) => {
              this.challengesRef = ref
            }}
          >
            {challenges.map(this._renderChallenge)}
          </ChallengesWrapper>
        </ChallengesContainer>
      </WrappedContainer>
    )
  }
}
