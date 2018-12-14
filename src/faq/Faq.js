import React, { Component } from 'react'
import { List } from 'immutable'
import styled from 'styled-components'

import data from '../data.json'

import WrappedContainer from '../WrappedContainer'


const FaqLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin: 32px 0 96px 0 !important;
`

const FaqRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const FaqItemQ = styled.div`
  font-family: Futura;
  line-height: 32px;
  font-size: 18px;
  color: #4a4a4a;
  font-weight: 700;
`

const FaqItemA = styled.div`
  width: 400px;

  color: #4a4a4a;
  font-family: Rockwell;
  font-size: 17px;
  font-weight: 400;
  line-height: 21px;

  margin-bottom: 64px !important;
`

const Spacer = styled.div`
  height: 192px;
`

export default class Faq extends Component {
  _fetchFaq() {
    const faqs = List(data.faq)
    const halfSize = Math.floor(faqs.size / 2)

    return [
      faqs.splice(halfSize),
      faqs.splice(0, halfSize),
    ]
  }

  _renderFaq = (data, i) => {
    return (
      <div key={`speaker-${i}`}>
        <FaqItemQ className="item">{data.q}</FaqItemQ>
        <FaqItemA className="item">{data.a}</FaqItemA>
      </div>
    )
  }

  render() {
    const [ faqs1, faqs2 ] = this._fetchFaq()

    return (
      <WrappedContainer>
        <FaqLeft>
          <Title className="item title">Frequently Asked Questions</Title>
          {faqs1.map(this._renderFaq)}
        </FaqLeft>
        <FaqRight>
          <Spacer />
          {faqs2.map(this._renderFaq)}
        </FaqRight>
      </WrappedContainer>
    )
  }
}
