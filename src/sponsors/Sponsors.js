import React, { Component } from 'react'
import styled from 'styled-components'

const SponsorsWrapper = styled.div`
  height: 400px;
  width: 1200px;

  margin: 80px auto;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`

const Sponsor1 = styled.div`
  width: 500px;
  height: 129px;
  background-image: url('sponsors/IPRlogo.png');
  background-size: 500px 129px;
  margin: 0 40px;
`
const Sponsor2 = styled.div`
  width: 416px;
  height: 129px;
  background-image: url('sponsors/OICTLogo.png');
  background-size: 416px 129px;
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
          <Sponsor1 />
          <Sponsor2 />
        </SponsorSection>
      </SponsorsWrapper>
    )
  }
}
