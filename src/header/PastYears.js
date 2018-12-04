import React, { Component } from 'react'
import styled from 'styled-components'


const PastYearsWrapper = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: center;
  background-color: var(--main-color);
  color: white;

  & h3 {
    margin: 5px;
    font-size: 1.17em;
  }
`

const PastYear = styled.a`
  font-size: 1.17em;
  margin: 5px;
  font-family: "Futura";
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
        <PastYear href="http://hackprague.com">2018</PastYear>
        <h3>•</h3>
        <PastYear href="http://hackprague.com/2017.html">2017</PastYear>
      </PastYearsWrapper>
    )
  }
}
