import React, { Component } from 'react'
import styled from 'styled-components'


const CountdownWrapper = styled.div`
  margin: 5px;
  height: 1680px;
  width: 100%;
  background-color: white;
  background-size: 16px 16px, 16px 16px;
  background-image:
    linear-gradient(to bottom, transparent 50%, #fff 50%),
    linear-gradient(to right, #e9edfe 50%, #fff 50%);
  background-repeat: repeat;
`

export default class Countdown extends Component {
  render() {
    return (
      <CountdownWrapper id="timeline">
      </CountdownWrapper>
    )
  }
}
