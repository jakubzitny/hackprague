import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.svg`
  width: 160px;
`

export default function Logo() {
  return (
    <LogoWrapper viewBox="0 0 40 65">
      <path
        fill="var(--logo-color, #fff)"
        fillRule="nonzero"
        d="M0 36l16-16V9H8v8l-8 8V1h40v64H0V36zm24-2v23h8V9h-8v14L8 39v18h8V42l8-8z"
      />
    </LogoWrapper>
  )
}