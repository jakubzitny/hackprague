import React, { Component } from 'react'
import styled from 'styled-components'


const HeadWrapper = styled.div`
  width: 225px;
  display: flex;
  flex-direction: row;
  color: white;
`

const Logo = styled.div`
  width: 96px;
  height: 156px;
  background-color: var(--main-color);
  background: url('logo.svg');
  background-size: 96px 156px;
  background-repeat: no-repeat;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 0 20px;
`


export default class Head extends Component {
  render() {
    return (
      <HeadWrapper>
        <Logo />
        <TitleWrapper>
          <Title>Hack</Title>
          <Title>Prague</Title>
          <Title>2019</Title>
          <Title>23-24</Title>
          <Title>June</Title>
        </TitleWrapper>
      </HeadWrapper>
    )
  }
}
