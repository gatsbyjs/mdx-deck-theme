import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/gatsby-mdx-theme.js',
  output: {
    file: 'dist/gatsby-mdx-theme.js',
    format: 'cjs'
  },
  plugins: [
    peerDeps(),
    babel()
  ]
}
