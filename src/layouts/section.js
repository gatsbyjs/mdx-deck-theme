import React from 'react'
import styled from 'styled-components'

import { Center, LogoBoxes } from '../components'
import { color } from '../colors'

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;

  position: relative;
  background-color: ${props => (props.inverted ? color : 'white')};
`

const LogoContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
`

export default function Section({ children, inverted }) {
  return (
    <Container inverted={inverted}>
      <LogoContainer>
        <LogoBoxes inverted={inverted} />
      </LogoContainer>
      {children}
    </Container>
  )
}
