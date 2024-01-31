const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 方式二
  devServer: {
    proxy: {
      '/ww': { //匹配所有的ww开头的请求路径
        target: 'http://localhost:5000',
        pathRewrite:{'^/ww':''}, //将ww变成空字符串，就可以只接收students
        ws: true, //用于支持websocket通信
        changeOrigin: true //用于控制请求头中的host值
      },
      '/ff': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/ff':''}, 
        ws: true, //用于支持websocket通信
        changeOrigin: true //用于控制请求头中的host值
      },
    }
  }
})
