import React, { Component } from 'react'
import styled from 'styled-components'

import DaysBox from './DaysBox'


const CountdownWrapper = styled.div`
  height: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  background-size: 16px 16px, 16px 16px;
  background-image:
    linear-gradient(to bottom, transparent 50%, #fff 50%),
    linear-gradient(to right, #e9edfe 50%, #fff 50%);
  background-repeat: repeat;
  background-position: 5px 5px;
`

const AnimStart = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`

const AnimStartPart1 = styled.div`
  height: 192px;
  width: 96px;

  background: url('pattern.svg');
  background-position: 0 32px;
  background-repeat: no-repeat;
  transform: rotate(180deg);

  /* box-sizing: border-box; */
  box-shadow: inset 32px 0px 0px 0px var(--main-color);
  margin-left: var(--block-size);
`

const AnimStartPart2 = styled.div`
  height: 192px;
  width: 64px;

  border-right: var(--block-size) solid var(--main-color);
`

const AnimStartPart3 = styled.div`
  height: 160px;
  width: 610px;
`

const AnimStartPart4 = styled.div`
  height: 160px;
  width: 96px;

  background: url('pattern.svg');
  transform: rotateX(180deg);
  margin-bottom: var(--block-size);
`

const TitleWrapper = styled.div`
  height: 64px;
  width: 100%;

  display: flex;
  flex-direction: row;
`

const TitleAnim = styled.div`
  width: 800px;

  display: flex;
  flex-direction: row;
`

const TitleAnimPart1 = styled.div`
  width: 192px;
  height: 200px; /* TODO */

  background: url('pattern-wide.svg');
  background-position: 64px 0;
  margin-left: var(--block-size);
`

const TitleText = styled.div`
  color: var(--main-color);

  margin-left: 32px;

  text-transform: uppercase;
  font-family: Futura;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;

  &.countdown {
    margin-left: 0;
    width: 376px;
  }

  &.and {
    width: 32px;
  }
`

const Square = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;

  margin-right: 32px;
  vertical-align: top;
  background: var(--main-color);
`

const DataWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
`

const DataAnim = styled.div`
  width: 906px;
  height: 100%;

  display: flex;
  flex-direction: row;
`

const DataAnimPart1 = styled.div`
  width: 192px;
  height: 100%;

  border-right: var(--block-size) solid var(--main-color);
`

const DataAnimPart2 = styled.div`
  width: 610px;
  height: 100%;

  border-right: var(--block-size) solid var(--main-color);
`

const DataTodos = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    margin: 32px;
  }
`

const Checkmark = styled.div`
  display: inline-block;
  width: 40px;
  height: 32px;

  margin: 32px 28px !important;
  vertical-align: top;
  background: url('checkmark.svg');
`

const DataDates = styled.div`
  display: flex;
  flex-direction: column;
`

const Datum = styled.div`
  height: 96px;
  padding-top: 23px;
  box-sizing: border-box;
  color: #4a4a4a;

  text-align: left;
  font-family: Futura;
  font-size: 20px;
  font-weight: 700;
`

const ApplyButton = styled.button`
  width: 128px;
  height: 32px;
  background-color: var(--main-color-2);
  text-transform: uppercase;
  color: var(--main-color);
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;


  margin-top: 3px;

  &:hover {
    opacity: 0.8;
  }

`

export default class Countdown extends Component {
  _handleApplyClick = () => {
    console.warn('TODO: apply')
  }

  render() {
    return (
      <CountdownWrapper id="timeline">
        <AnimStart>
          <AnimStartPart1 />
          <AnimStartPart2 />
          <AnimStartPart3 />
          <AnimStartPart4 />
        </AnimStart>
        <TitleWrapper>
          <TitleAnim>
            <TitleAnimPart1 />
          </TitleAnim>
          <TitleText className="countdown">
            <Square />
            Countdown
          </TitleText>
          <TitleText className="and">&</TitleText>
          <TitleText>Timeline</TitleText>
        </TitleWrapper>


      <DataWrapper>
        <DataAnim>
          <DataAnimPart1 />
          <DataAnimPart2 />
        </DataAnim>
        <DaysBox />
        <DataTodos>
          <Checkmark />
          <Square />
          <Square />
        </DataTodos>
        <DataDates>
          <Datum>
            01/04/2019 <br />
            Application deadline <br />
            <ApplyButton onClick={this._handleApplyClick}>Apply</ApplyButton>
          </Datum>
          <Datum>
            01/05/2019 <br />
            Participants selected
          </Datum>
          <Datum>
            04/05/2019 <br />
            HackPrague
          </Datum>
        </DataDates>
      </DataWrapper>

      </CountdownWrapper>
    )
  }
}
