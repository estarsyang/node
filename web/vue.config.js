module.exports = {
  devServer: {
    proxy: {
      // '/': {
      //   target: 'http://estarsyang.com/',
      //   ws: true,
      //   changeOrigin: true
      // },
      '/api': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
}