import React, { Component } from 'react'
import styled from 'styled-components'

const SponsorsWrapper = styled.div`
  height: 700px;
  width: 1200px;

  margin: 80px auto;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    width: 375px;
    height: auto;
    margin: 40px auto;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`

const SponsorSection = styled.div`
  margin: 40px 0;

  display: flex;
  flex-direction: row;

  & a {
    height: 129px;

    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    margin: 0 20px;

    & a {
      width: 335px;
      margin: 10px 0;
    }
  }
`

const Sponsor1 = styled.a`
  display: block;

  width: 500px;
  background-image: url('sponsors/IPRlogo.png');
  margin: 0 40px;
`
const Sponsor2 = styled.a`
  display: block;

  width: 416px;
  background-image: url('sponsors/OICTLogo.png');
  margin: 0 40px;
`

const Sponsor3 = styled.a`
  display: block;

  width: 510px;
  background-image: url('sponsors/keboola.svg');
  margin: 0 40px;
`

export default class Sponsors extends Component {
  render() {
    return (
      <SponsorsWrapper>
        <TitleWrapper>
          <div className="title item">Sponsors & Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <Sponsor1 href="http://en.iprpraha.cz/" target="_blank" rel="noopener noreferrer" />
          <Sponsor2 href="https://operatorict.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor3 href="http://keboola.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
      </SponsorsWrapper>
    )
  }
}
