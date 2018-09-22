import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/gatsby-mdx-theme.js',
  output: {
    file: 'cjs/gatsby-mdx-theme.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [nodeResolve(), peerDeps(), babel()]
}
