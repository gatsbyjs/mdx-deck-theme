import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './gatsby-code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '1s',
  colors: {
    background: 'white',
    heading: colors.gatsby
  },
  blockquote: {
    color: colors.gatsby,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.gatsby}`
  },
  paragraph: {
    color: colors.gatsby
  },
  li: {
    color: colors.gatsby
  },
  prism: {
    style: codeTheme
  }
}
