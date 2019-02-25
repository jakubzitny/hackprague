import React, { Component } from 'react'
import styled from 'styled-components'

const SponsorsWrapper = styled.div`
  height: 1800px;
  width: 1200px;

  margin: 80px auto;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100vw;
  }

  @media (max-width: 768px) {
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
  align-items: center;

  & a {
    background-repeat: no-repeat;
    background-size: contain;
  }

  & a.big {
    height: 300px;
    width: 612px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;

    & a {
      width: 80vw;
      margin: 10px 0;
    }
  }
`

const Sponsor1 = styled.a`
  display: block;

  height: 129px;
  width: 500px;
  background-image: url('sponsors/IPRlogo.png');
  margin: 0 40px;
`
const Sponsor2 = styled.a`
  display: block;

  height: 129px;
  width: 416px;
  background-image: url('sponsors/OICTLogo.png');
  margin: 0 40px;
`

const Sponsor3 = styled.a`
  display: block;

  width: 510px;
  height: 113px;
  background-image: url('sponsors/keboola.svg');
  margin: 0 40px;
`

const Sponsor4 = styled.a`
  display: block;

  height: 129px;
  width: 463px;
  background-image: url('sponsors/reactive.png');
  margin: 0 40px;
`

const Sponsor5 = styled.a`
  display: block;

  background-image: url('sponsors/mlprague.png');
  margin: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;

    &.big {
      width: 80vw !important;
      margin: 10px 0;
    }
  }
`

const Sponsor6 = styled.a`
  display: block;

  height: 135px;
  width: 450px;
  background-image: url('sponsors/socialbakers.png');
  margin: 0 40px;
`

const Sponsor7 = styled.a`
  display: block;

  height: 129px;
  width: 439px;
  background-image: url('sponsors/czechitas.png');
  margin: 0 40px;
`

const Sponsor9 = styled.a`
  display: block;

  height: 130px;
  width: 344px;
  background-image: url('sponsors/apify.png');
  margin: 0 40px;
`

const Sponsor8 = styled.a`
  display: block;

  height: 165px;
  width: 359px;
  background-image: url('sponsors/avrar.svg');
  margin: 0 40px;
`

const SponsorAbb = styled.a`
  display: block;

  height: 155px;
  width: 390px;
  background-image: url('sponsors/abb.svg');
  margin: 0 40px;
`

const SponsorFlatzone = styled.a`
  display: block;

  height: 70px;
  width: 455px;
  background-image: url('sponsors/flatzone.svg');
  margin: 0 40px;
`

const SponsorVeeam = styled.a`
  display: block;

  height: 65px;
  width: 445px;
  background-image: url('sponsors/veeam.svg');
  margin: 0 40px;
`

const SponsorMPO = styled.a`
  display: block;

  height: 415px;
  width: 225px;
  background-image: url('sponsors/mpo.svg');
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
          <SponsorAbb href="https://new.abb.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorFlatzone href="https://www.flatzone.cz" target="_blank" rel="noopener noreferrer" />
          <SponsorVeeam href="https://www.veeam.com/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor3 href="https://keboola.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor2 href="https://operatorict.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor6 href="https://www.socialbakers.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor9 href="https://www.apify.com/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor1 href="http://en.iprpraha.cz/" target="_blank" rel="noopener noreferrer" />
          <Sponsor8 href="https://avrar.cz/en" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor5 href="https://mlprague.com" target="_blank" rel="noopener noreferrer" className="big" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor4 href="https://reactiveconf.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor7 href="https://www.czechitas.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorMPO href="https://www.mpo.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
      </SponsorsWrapper>
    )
  }
}
