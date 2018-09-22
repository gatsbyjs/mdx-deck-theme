import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './gatsby-code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  colors: {
    background: 'white',
    heading: colors.gatsby
  },
  h2: {
    color: 'grey',
    fontWeight: 400,
    textAlign: 'left'
  },
  prism: {
    style: codeTheme
  }
}
