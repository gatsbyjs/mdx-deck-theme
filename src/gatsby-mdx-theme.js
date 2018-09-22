import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

import { code, header } from './fonts'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  colors: {
    background: 'white',
    heading: '#663399'
  },
  h2: {
    color: 'grey',
    fontWeight: 400
  },
  prism: {
    style: okaidia // todo: use custom GatsbyJS theme
  }
}
