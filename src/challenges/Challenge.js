import React, { Component } from 'react'
import styled from 'styled-components'

const ChallengeWrapper = styled.div`
  margin: 20px;

  font-family: Futura;
  color: #4a4a4a;

  /* border-bottom: 4px solid #4a4a4a; */
`

const ChallengeTitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;

  margin-bottom: 20px;
  cursor: pointer;

  background-color: var(--main-color);
  color: #fff;
`

const SectionsWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
`

const SectionTitle = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;

  text-transform: lowercase;
`

const SectionParagraph = styled.p`
  margin: 15px 0 0 0;
  font-size: 16px;
  font-weight: 500;

  & a, & a:visited, & a:link {
    color: #000;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`

export default class Challenge extends Component {
  _getChallengeId() {
    return this.props.challenge.title.toLowerCase().replace(' ', '')
  }

  _formatSectionData() {
    const { challenge } = this.props
    const sections = Object.getOwnPropertyNames(challenge)

    return sections.filter((section) => {
      return section !== 'title'
    })
  }

  _renderSection = (sectionName, sectionContents, sectionId) => {
    const sectionKey = `challenge-${this._getChallengeId()}-section-${sectionId}`
    const sectionNames = {
      'questions': 'Possible questions',
      'use': 'Suggested data use',
    }

    return (
      <SectionsWrapper key={sectionKey}>
        <SectionTitle>{sectionNames[sectionName] || sectionName}</SectionTitle>
        {(Array.isArray(sectionContents) &&
          <ul>
            {sectionContents.map((sectionContentsPart, liId) => {
              if (Array.isArray(sectionContentsPart)) {
                return (
                  <ul key={`${sectionKey}-${liId}`}>
                    {sectionContentsPart.map((sectionContentsSubPart, liId2) => {
                      return <li key={`${sectionKey}-${liId}-${liId2}`}>{sectionContentsSubPart}</li>
                    })}
                  </ul>
                )
              }

              return <li key={`${sectionKey}-${liId}`}>{sectionContentsPart}</li>
            })}
          </ul>
        )}
        {(!Array.isArray(sectionContents) &&
          <SectionParagraph dangerouslySetInnerHTML={{__html: sectionContents}}></SectionParagraph>
        )}
      </SectionsWrapper>
    )
  }

  render() {
    const { challenge } = this.props
    const sections = this._formatSectionData()
    const toggleChar = (this.props.visible) ? '-' : '+'

    return (
      <ChallengeWrapper>
        <ChallengeTitle onClick={this.props.onToggleRequest}>{`${toggleChar} ${challenge.title}`}</ChallengeTitle>
        {(this.props.visible && sections.map((section, i) => {
          return this._renderSection(section, challenge[section], i)
        }))}
      </ChallengeWrapper>
    )
  }
}
