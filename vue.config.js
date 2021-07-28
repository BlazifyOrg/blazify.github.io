
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
  },
  transpileDependencies: [
    'vuetify'
  ]
}
