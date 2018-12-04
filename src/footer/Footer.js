import React, { Component } from 'react'
import styled from 'styled-components'

import Head from '../header/Head'

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #4a4a4a;
`

const FooterContainer = styled.div`
  height: 400px;
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

// TODO: reuse
const PastYears = styled.h3`
  width: 225px;
  text-align: left;
  margin-top: 30px;
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
  text-align: left;
  font-size: 17px;
  line-height: 23px;
`

const ContactContainer = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ContactItem = styled.a`
  display: block;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  text-transform: lowercase;

  color: white;

  &:visited, &:link {
    color: white;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &::after {
    content: '•';
    margin: 0 10px;
  }

  &:last-of-type::after {
    content: '';
  }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterContainer>
          <FooterLeft>
            <Head />
            <PastYears>2019 • 2018 • 2017</PastYears>
          </FooterLeft>
          <FooterRight>
            <Title>about us.</Title>
            <Text>
              HackPrague is a nonprofit organization that each year for 36 hours brings together 150 passionate hackers from across Europe to create cool software and hardware projects. To stimulate innovation, HackPrague always makes sure to bring speakers and mentors, each respected world-wide in their respective field, from companies like Facebook, Google, Github, and more.
            </Text>
          </FooterRight>
        </FooterContainer>
        <ContactContainer>
          <ContactItem href="mailto:team@hackprague.com">team@hackprague.com</ContactItem>
          <ContactItem href="https://facebook.com/hackprague">facebook</ContactItem>
          <ContactItem href="">twitter</ContactItem>
          <ContactItem href="">instagram</ContactItem>
        </ContactContainer>
      </FooterWrapper>
    )
  }
}
