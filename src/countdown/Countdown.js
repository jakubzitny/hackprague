import React, { Component } from 'react'
import styled from 'styled-components'

import DaysBox from './DaysBox'
import WrappedContainer from '../WrappedContainer'

const CountdownWrapper = styled.div`
  height: 847px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: -252px;

  /* background-color: white;
  background-size: 16px 16px, 16px 16px;
  background-image:
    linear-gradient(to bottom, transparent 50%, #fff 50%),
    linear-gradient(to right, #e9edfe 50%, #fff 50%);
  background-repeat: repeat;
  background-position: 5px 5px; */

  @media (max-width: 768px) {
    height: 946px;
    margin: 0;
  }
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
  width: 289px;
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
  width: 513px;

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
    width: 345px;
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
  height: 288px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`

const TodosDatesWrapper = styled.div`
  display: flex;

  @media (max-width: 375px) {
    width: 100vw;
  }
`

const DataAnim = styled.div`
  width: 585px;
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
  width: 289px;
  height: 100%;

  display: flex;
  flex-direction: column;

  /* border-right: var(--block-size) solid var(--main-color); */
`

const BorderDiv = styled.div`
  width: 100%;
  height: var(--block-size);
  border-right: var(--block-size) solid var(--main-color);
`

const DataAnimPart22 = styled.div`
  display: flex;

  flex-direction: row;
  align-items: flex-end;
`

const DataAnimPart23 = styled.div`
  width: 128px;
  height: 50px;
  margin: 0 32px;
  border-left: 32px solid var(--main-color);
  border-right: 32px solid var(--main-color);
`

const Pattern1 = styled.div`
  width: 96px;
  height: 160px;

  background-image: url('pattern.svg');
  background-repeat: no-repeat;
  background-position-x: -32px;
`

const Spacer = styled.div`
  width: 64px;
`

const Pattern2 = styled.div`
  width: 96px;
  height: 160px;

  transform: rotateY(180deg);

  background-image: url('pattern.svg');
  background-position-x: -32px;
  background-repeat: no-repeat;

  margin: 46px 32px 0 0;
`

const DataTodos = styled.div`
  display: flex;
  flex-direction: column;
  height: 692px;

  & div {
    @media (max-width: 768px) {
      margin: 32px 32px 48px 0;
    }

    margin: 32px 32px 48px;
  }
`

// const Checkmark = styled.div`
//   display: inline-block;
//   width: 40px;
//   height: 32px;

//   margin: 32px 28px !important;
//   vertical-align: top;
//   background: url('checkmark.svg');
// `

const DataDates = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;

  @media (max-width: 375px) {
    width: 100vw;
  }
`

const Datum = styled.div`
  min-height: 112px;
  padding-top: 23px;
  box-sizing: border-box;
  color: #4a4a4a;

  text-align: left;
  font-family: Futura;
  font-size: 20px;
  font-weight: 700;

  & span {
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;

    @media (max-width: 375px) {
      display: none;
    }
  }
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

  /* display: none; */
`

const Calendar = styled.div`
  margin-top: 3px;

  width: 160px !important;

  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  font-family: "Open Sans", Roboto, "Segoe UI", Frutiger, "Frutiger Linotype",
    "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  color: var(--main-color) !important;
  text-decoration: none;
  padding: 12px;
  text-transform: uppercase;

  background-color: var(--main-color-2);

  font-size: 16px;
  font-weight: 700 !important;
  border: none;
  text-shadow: none;
  box-shadow: none !important;

  &:hover {
    opacity: 0.8;
    background-color: var(--main-color-2);
    color: var(--main-color) !important;
    font-size: 16px;
    font-weight: 700;
  }
`

const TransitionWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  pointer-events: none;
`

const TransitionAnim = styled.div`
  width: 576px;
  height: 800px;
  background-image: url('anim-pattern.svg');
  background-repeat: no-repeat;
  background-position: 32px -499px;
`

export default class Countdown extends Component {
  _handleCalendarClick = () => {
    const CALENDAR_URL = '/hackprague2019.ics'
    window.open(CALENDAR_URL, '_blank')
  }

  render() {
    return (
      <WrappedContainer wider>
        <CountdownWrapper id="timeline">
          <AnimStart className="nomobile nomobile2">
            <AnimStartPart1 />
            <AnimStartPart2 />
            <AnimStartPart3 />
            <AnimStartPart4 />
          </AnimStart>
          <TitleWrapper className="nomobile nomobile2">
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
            <DataAnim className="nomobile nomobile2">
              <DataAnimPart1 />
              <DataAnimPart2>
                <BorderDiv />
                <DataAnimPart22>
                  <Pattern1 />
                  <Spacer />
                  <Pattern2 />
                </DataAnimPart22>
                <DataAnimPart23 />
              </DataAnimPart2>
            </DataAnim>
            <DaysBox />
            <TodosDatesWrapper>
              <DataTodos>
                {/* <Checkmark /> */}
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
              </DataTodos>
              <DataDates>
                <Datum>
                  01/03/2019 <br />
                  Early application deadline <br />
                  <span>(participants who need to book plane tickets early)</span>
                </Datum>
                <Datum>
                  03/03/2019 <br />
                  First 30 participants selected
                </Datum>
                <Datum>
                  12/04/2019 <br />
                  Application deadline <br />
                  <ApplyButton onClick={this.props.onApplyClick}>Apply</ApplyButton>
                </Datum>
                <Datum>
                  14/04/2019 <br />
                  Participants selected
                </Datum>
                <Datum>
                  04/05/2019 <br />
                  HackPrague <br />
                  <Calendar onClick={this._handleCalendarClick}>
                    Add to Calendar
                  </Calendar>
                </Datum>
              </DataDates>
            </TodosDatesWrapper>
          </DataWrapper>

          <TransitionWrapper className="nomobile nomobile2">
            <TransitionAnim />
          </TransitionWrapper>

        </CountdownWrapper>
      </WrappedContainer>
    )
  }
}
