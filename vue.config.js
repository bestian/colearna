const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/colearna/'
    : '/',
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true
    }
  },
  transpileDependencies: true
})
