import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

import { code, header } from './fonts'

export * from './layouts/index'

export default {
  ...theme,
  colors: {
    background: 'white',
    heading: '#663399',
    font: header.join(','),
    monospace: code.join(',')
  },
  prism: {
    style: okaidia // todo: use custom GatsbyJS theme
  }
}
