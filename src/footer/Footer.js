import React, { Component } from 'react'
import styled from 'styled-components'

import Head from '../header/Head'

const FooterWrapper = styled.div`
  height: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #4a4a4a;
  padding: 50px 0;

  & a {
    display: block;
    margin-top: 20px;
  }

  & a:visited, & a:link {
    color: white;
    text-decoration: none;
  }

  & a:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const FooterContainer = styled.div`
  width: 1000px;

  display: flex;
  color: white;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`

const FooterLeft = styled.div`
`

const FooterRight = styled.div`
`

const Title = styled.h2`
  width: 400px;
  font-size: 36px;
  text-align: left;
  text-transform: lowercase;

  margin-bottom: 30px;
`

const Text = styled.p`
  width: 400px;
  margin: 0 0 30px 0;

  text-align: left;
  font-size: 17px;
  line-height: 23px;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
`

const Hashtag = styled.div`
  margin-top: 60px;
  text-transform: uppercase;
  font-family: Rockwell;
  font-size: 36px;
  font-weight: 700;
`

const Links = styled.div`
  text-align: left;
  font-size: 17px;
  font-weight: 400;
  width: 100px;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterContainer>
          <FooterLeft>
            <Title>about us.</Title>
            <Text>
              <strong>HackPrague</strong> believes that Central Europe has tremendous innovative potential and that Prague can become the ‘Silicon city’ of Europe. We are bringing together Europe’s brightest tech innovators to collaborate, create novel solutions, and share their knowledge. Moreover, we strive to connect technical and non-technical communities by organizing community events including hackathons, workshops and lectures.
              <a href="mailto:team@hackprague.com">team@hackprague.com</a>
            </Text>
          </FooterLeft>
          <FooterRight>
            <LogoWrapper>
              <Links>
                <b>Follow us</b>
                <a href="https://www.instagram.com/hackprague">Instagram</a>
                <a href="https://facebook.com/hackprague">Facebook</a>
                {/* <a href="#">Twitter</a> */}
              </Links>
              <Links>
                <b>Events</b>
                {/* <a href="/">2019</a> */}
                <a href="http://hackprague.com/hackathon2018">2018</a>
                <a href="http://hackprague.com/hackathon2017">2017</a>
              </Links>
              <Head />
            </LogoWrapper>
            <Hashtag>
              #hackprague2019
            </Hashtag>
          </FooterRight>
        </FooterContainer>
      </FooterWrapper>
    )
  }
}
