import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Center } from '../components'
import colors from '../colors'

const Container = styled.div`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: white;

  align-items: flex-start;

  h1 {
    text-align: left;
  }

  h2 {
    color: grey;
    font-weight: 400;
    text-align: left;
  }
`

const CenteredHalf = styled(Center)`
  flex-direction: column;
  height: 50vh;

  padding-left: 15vw;
`

const PurpleBg = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${colors.gatsby};
`

export default function Main({ children }) {
  return (
    <Container>
      <CenteredHalf>{children}</CenteredHalf>
      <PurpleBg />
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
