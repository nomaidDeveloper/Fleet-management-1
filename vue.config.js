const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'css',
      patterns: ['./src/assets/scss/style.scss', './src/assets/scss/vuesax.scss'],
    },
  },
})
