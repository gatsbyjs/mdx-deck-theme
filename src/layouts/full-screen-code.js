import React from 'react'
import styled from 'styled-components'

import colors from '../colors'

const FullCode = styled.div([], {
  width: '100vw',
  height: '100vh',
  textAlign: 'left',
  backgroundColor: colors.code.bg,
  '& pre': {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '100vw',
    height: '100vh'
  }
})

export default FullCode
