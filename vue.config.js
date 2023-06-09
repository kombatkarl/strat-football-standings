module.exports = {
  //publicPath:
  //  process.env.NODE_ENV !== 'production'
  //    ? '/sfs/'
  //    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:3000',
        changeOrigin: true, // so CORS doesn't bite us. 
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
