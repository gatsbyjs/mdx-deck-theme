import React from 'react'

import { Logo } from './logo'
import { Boxes } from './boxes'

export function LogoBoxes({ inverted }) {
  return (
    <Boxes inverted={inverted}>
      <Logo inverted={inverted} />
    </Boxes>
  )
}

LogoBoxes.defaultProps = {
  inverted: false
}
