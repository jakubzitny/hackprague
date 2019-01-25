import React, { Component } from 'react'
import styled from 'styled-components'


const PastYearsWrapper = styled.div`
  width: 225px;
  display: flex;
  padding: 30px 0;
  background-color: var(--main-color);
  color: white;

  & h3 {
    margin: 0;
    font-size: 20px;
  }
`

const PastYear = styled.a`
  font-size: 21px;
  font-family: Futura;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: var(--main-color-2);
    opacity: 0.9;
    cursor: pointer;
  }

  &:visited, &:link {
    color: white;
  }

  &.active {
    color: var(--main-color-2);
  }
`

export default class PastYears extends Component {
  render() {
    return (
      <PastYearsWrapper>
        <PastYear className="active" href="/">2019</PastYear>
        <h3>•</h3>
        <PastYear href="http://hackprague.com/hackathon2018/">2018</PastYear>
        <h3>•</h3>
        <PastYear href="http://hackprague.com/hackathon2017/">2017</PastYear>
      </PastYearsWrapper>
    )
  }
}
