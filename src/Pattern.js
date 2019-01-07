import React from 'react'
import styled from 'styled-components'

const PatternWrapper = styled.svg`
  width: 102px;
`

export default function Pattern() {
  return (
    <PatternWrapper viewBox="0 0 96 160">
      <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 64 -58)">
        <mask id="b" fill="#fff">
          <path id="a" d="M0 0h160v160H0z"/>
        </mask>
        <g fill="#20459C" fill-rule="nonzero" mask="url(#b)">
          <path d="M0 58v44l64 64v-44z"/>
          <path d="M64 130H32v64h32z"/>
        </g>
      </g>
   </PatternWrapper>
  )
}