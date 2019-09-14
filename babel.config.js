
module.exports = {
  presets: [
    "@babel/preset-env", // transform ES5+ to a commom Js sintaxe
    "@babel/preset-react" // transform the react sintaxe to a browser sintaxe
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}