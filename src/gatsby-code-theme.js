import colors from './colors'

const preStyle = {
  color: colors.code.text,
  background: colors.code.bg,
  textShadow: '0 1px rgba(0, 0, 0, 0.3)',
  fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  wordWrap: 'normal',
  lineHeight: '1.5',
  MozTabSize: '4',
  OTabSize: '4',
  tabSize: '4',
  WebkitHyphens: 'none',
  MozHyphens: 'none',
  msHyphens: 'none',
  hyphens: 'none'
}

export default {
  'code[class*="language-"]': preStyle,
  'pre[class*="language-"]': preStyle,
  ':not(pre) > code[class*="language-"]': {
    background: '#272822',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal'
  },
  comment: {
    color: colors.code.comment
  },
  punctuation: {
    color: colors.code.punctuation
  },
  property: {
    color: colors.code.tag
  },
  tag: {
    color: colors.code.tag
  },
  boolean: {
    color: colors.code.tag
  },
  number: {
    color: colors.code.tag
  },
  'function-name': {
    color: colors.code.tag
  },
  constant: {
    color: colors.code.tag
  },
  symbol: {
    color: colors.code.tag
  },
  selector: {
    color: colors.code.selector
  },
  'attr-name': {
    color: colors.code.selector
  },
  string: {
    color: colors.code.selector
  },
  char: {
    color: colors.code.selector
  },
  function: {
    color: colors.code.selector
  },
  builtin: {
    color: colors.code.selector
  },
  'atrule, keyword, class-name': {
    color: colors.code.keyword
  },
  'attr-value': {
    color: colors.code.keyword
  },
  keyword: {
    color: colors.code.keyword
  },
  'class-name': {
    color: colors.code.keyword
  },
  inserted: {
    color: colors.code.add
  },
  deleted: {
    color: colors.code.remove
  },
  regex: {
    color: colors.code.regex
  },
  important: {
    color: colors.code.regex,
    fontWeight: `normal`
  },
  bold: {
    fontWeight: `bold`
  },
  italic: {
    fontStyle: `italic`
  },
  entity: {
    cursor: `help`
  },
  '.namespace': {
    opacity: 0.7
  },
  '.language-css string, .style string': {
    color: colors.code.cssString
  }
}
