import React, { Component } from 'react'
import styled from 'styled-components'


const DaysBoxWrapper = styled.div`
  height: 256px;
  width: 376px;

  display: flex;
  flex-direction: row;

  margin-top: 32px;
  margin-left: -92px;
`

const Left = styled.div`
  height: 100%;
  width: 160px;
  background-color: var(--main-color);
`

const Right = styled.div`
  height: 100%;
  width: 216px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 32px solid var(--main-color);
  box-sizing: border-box;

  background: white;
  color: #4a4a4a;
  font-family: Futura;
`

const Number = styled.h3`
  margin: 0;

  font-size: 49px;
  font-weight: 700;
`

const Text = styled.p`
  width: 100%;
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;
  text-align: center;
`

export default class DaysBox extends Component {
  // TODO: MomentJS.
  _getDaysToHackPrague() {
    const HP_DATE = '2019-05-04'
    const timeDifference = new Date(HP_DATE).getTime() - Date.now()

    return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  }

  render() {
    return (
      <DaysBoxWrapper>
        <Left />
        <Right>
          <Number>{this._getDaysToHackPrague()}</Number>
          <Text>days to <br />HackPrague</Text>
        </Right>
      </DaysBoxWrapper>
    )
  }
}
