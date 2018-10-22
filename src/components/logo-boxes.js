import React from 'react'

import { Logo } from './logo'
import { Boxes } from './boxes'

export function LogoBoxes({ inverted }) {
  return <Boxes inverted={inverted} />
}

LogoBoxes.defaultProps = {
  inverted: false
}
