module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://estarsyang.com/',
        ws: true,
        changeOrigin: true
      },
    },
  }
}