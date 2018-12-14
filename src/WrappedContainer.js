import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'


const Wrapper = styled.div`
  min-height: 785px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;

  &.squared {
    background-size: 16px 16px, 16px 16px;
    background-image:
      linear-gradient(to bottom, transparent 50%, #fff 50%),
      linear-gradient(to right, #e9edfe 50%, #fff 50%);
    background-repeat: repeat;
    background-position: 5px 5px;
  }
`

const Container = styled.div`
  width: 1000px;

  display: flex;
  flex-direction: row;
  text-align: left;

  &.wider {
    width: 1200px;
  }
`


export default class WrappedContainer extends Component {
  static defaultProps = {
    squared: true,
    wider: false,
  }

  render() {
    return (
      <Wrapper className={classNames({ squared: this.props.squared })}>
        <Container className={classNames({ wider: this.props.wider })}>
          {this.props.children}
        </Container>
      </Wrapper>
    )
  }
}
