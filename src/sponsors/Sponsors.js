import React, { Component } from 'react'
import styled from 'styled-components'

const SponsorsWrapper = styled.div`
  height: 5000;
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

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .logo-title,
  & .logo-title:link,
  & .logo-title:active,
  & .logo-title:visited,
  & .logo-title:hover {
    display: block;

    color: var(--main-color);

    font-family: Futura;
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;

    margin-bottom: 10px;
  }
`

const TitleWrapperTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: 150px;
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

  height: 217px;
  width: 414px;
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

  height: 225px;
  width: 415px;
  background-image: url('sponsors/mpo.svg');
  margin: 0 40px;
`

const SponsorMMR = styled.a`
  display: block;

  height: 135px;
  width: 440px;
  background-image: url('sponsors/mmr.svg');
  margin: 0 40px;
`

const SponsorSmartPlan = styled.a`
  display: block;

  height: 300px;
  width: 415px;
  background-image: url('sponsors/smartplan.svg');
  margin: 0 40px;
`

const SponsorEpam = styled.a`
  display: block;

  height: 170px;
  width: 415px;
  background-image: url('sponsors/epam.png');
  margin: 0 40px;
`

const SponsorIdc = styled.a`
  display: block;

  height: 130px;
  width: 439px;
  background-image: url('sponsors/idc.png');
  margin: 0 40px;
`

const SponsorFIT = styled.a`
  display: block;

  height: 200px;
  width: 460px;
  background-image: url('sponsors/fit.svg');
  margin: 0 40px;
`

const SponsorMatfyz = styled.a`
  display: block;

  height: 200px;
  width: 460px;
  background-image: url('sponsors/matfyz.jpg');
  margin: 0 40px;
`

const SponsorFlowee = styled.a`
  display: block;

  height: 130px;
  width: 350px;
  background-image: url('sponsors/flowee.png');
  margin: 0 40px;
`

const SponsorO2 = styled.a`
  display: block;

  height: 130px;
  width: 190px;
  background-image: url('sponsors/o2.svg');
  margin: 0 40px;
`

const SponsorBrno = styled.a`
  display: block;

  height: 136px;
  width: 300px;
  background-image: url('sponsors/brno.png');
  margin: 0 40px;
`

const SponsorLiftago = styled.a`
  display: block;

  height: 130px;
  width: 190px;
  background-image: url('sponsors/liftago.png');
  margin: 0 40px;
`

const SponsorCscc = styled.a`
  display: block;

  height: 170px;
  width: 300px;
  background-image: url('sponsors/cscc.png');
  margin: 0 40px;
`

const SponsorWolt = styled.a`
  display: block;

  height: 170px;
  width: 300px;
  background-image: url('sponsors/wolt.png');
  margin: 0 40px;
`

const SponsorCorpisMaps = styled.a`
  display: block;

  height: 170px;
  width: 430px;
  background-image: url('sponsors/corpismaps.png');
  margin: 0 40px;
`

const SponsorCEEHacks = styled.a`
  display: block;

  height: 170px;
  width: 230px;
  background-image: url('sponsors/ceehacks.png');
  margin: 0 40px;
`
const SponsorVB = styled.a`
  display: block;

  height: 185px;
  width: 230px;
  background-image: url('sponsors/vzdelanibudoucnosti.png');
  margin: 0 40px;
`
const SponsorPrgAi = styled.a`
  display: block;

  height: 185px;
  width: 480px;
  background-image: url('sponsors/prgai.png');
  margin: 0 40px;
`

const SponsorHere = styled.a`
  display: block;

  height: 135px;
  width: 200px;
  background-image: url('sponsors/here.png');
  margin: 0 40px;
`

const SponsorLifos = styled.a`
  display: block;

  height: 100px;
  width: 225px;
  background-image: url('sponsors/lifos.jpg');
  margin: 0 40px;
`

export default class Sponsors extends Component {
  render() {
    return (
      <SponsorsWrapper>
        <TitleWrapperTop>
          <div className="title item">Under the auspices of</div>
        </TitleWrapperTop>

        <SponsorSection>
          <SponsorMPO href="https://www.mpo.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorMMR href="https://mmr.cz/en/Homepage" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <LogoWrapper>
          <a href="http://czechsmartcitycluster.com" className="logo-title" target="_blank" rel="noopener noreferrer">
            President of CSCC prof. Miroslav Svítek
          </a>
          <SponsorCscc href="http://czechsmartcitycluster.com" target="_blank" rel="noopener noreferrer" />
          </LogoWrapper>
        </SponsorSection>
        <SponsorSection>
          <Sponsor1 href="http://en.iprpraha.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>


        <TitleWrapper>
          <div className="title item">Sponsors</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorAbb href="https://new.abb.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorEpam href="https://www.epam.com/" target="_blank" rel="noopener noreferrer" />
          <SponsorFlatzone href="https://www.flatzone.cz" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorVeeam href="https://www.veeam.com/" target="_blank" rel="noopener noreferrer" />
          <Sponsor3 href="https://keboola.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor6 href="https://www.socialbakers.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor9 href="https://www.apify.com/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorSmartPlan href="http://smart-plan.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Venue Partner</div>
        </TitleWrapper>

        <SponsorSection>
          <Sponsor1 href="http://en.iprpraha.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Data Partners</div>
        </TitleWrapper>
        <SponsorSection>
          <SponsorO2 href="https://www.o2.cz/osobni/en/" target="_blank" rel="noopener noreferrer" />
          <Sponsor2 href="https://operatorict.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <SponsorSection>
          <SponsorBrno href="https://www.gotobrno.cz/en/" target="_blank" rel="noopener noreferrer" />
          <SponsorLiftago href="https://www.liftago.com" target="_blank" rel="noopener noreferrer" />
          <SponsorHere href="https://www.here.com/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Academic Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorFIT href="https://fit.cvut.cz/en" target="_blank" rel="noopener noreferrer" />
          <SponsorMatfyz href="https://www.matfyz.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Media Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorFlowee href="https://www.flowee.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Community Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorIdc href="https://www.idc.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor8 href="https://avrar.cz/en" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor4 href="https://reactiveconf.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor7 href="https://www.czechitas.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorWolt href="https://wolt.com" target="_blank" rel="noopener noreferrer" />
          <SponsorCorpisMaps href="https://www.corpismaps.com" target="_blank" rel="noopener noreferrer"/>
        </SponsorSection>
        <SponsorSection>
          <Sponsor5 href="https://mlprague.com" target="_blank" rel="noopener noreferrer" className="big" />
        </SponsorSection>
        <SponsorSection>
          <SponsorCEEHacks href="https://www.ceehacks.com/" target="_blank" rel="noopener noreferrer" />
          <SponsorVB href="https://www.facebook.com/vzdelanibudoucnosti/" target="_blank" rel="noopener noreferrer"/>
        </SponsorSection>
        <SponsorSection>
          <SponsorPrgAi href="https://prg.ai" target="_blank" rel="noopener noreferrer"/>
          <SponsorLifos href="#" />
        </SponsorSection>

      </SponsorsWrapper>
    )
  }
}
