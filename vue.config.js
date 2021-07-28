
module.exports = {
  configureWebpack: {
    output: {
      crossOriginLoading: 'anonymous'
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
