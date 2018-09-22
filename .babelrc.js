module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      targets: {
        "browsers": [ ">0.25%", "not ie 11", "not op_mini all"]
      }
    }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-object-rest-spread'
  ]
}