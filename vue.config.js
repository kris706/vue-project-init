const Timestamp = new Date().getTime();
module.exports = {
  // baseUrl  type:{string} default:'/'
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  // outputDir: 'dist',

  // pages:{ type:Object,Default:undfind }
  /*
  构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
  个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
  的字符串，
  注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
*/
  // pages: {
  // index: {
  // entry for the page
  // entry: 'src/index/main.js',
  // the source template
  // template: 'public/index.html',
  // output as dist/index.html
  // filename: 'index.html'
  // },
  // when using the entry-only string format,
  // template is inferred to be `public/subpage.html`
  // and falls back to `public/index.html` if not found.
  // Output filename is inferred to be `subpage.html`.
  // subpage: 'src/subpage/main.js'
  // },
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    },
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        style: '@/assets/style',
        api: '@/api'
      }
    }
  },

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项

  devServer: {
    port: 8090, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    // proxy: 'http://192.168.1.106:8081' // 配置跨域处理,只有一个代理
    // proxy: {
    //   '/api': {
    //     //替换代理地址名称
    //     target: 'http://192.168.1.106:8081', //代理地址
    //     ws: true,
    //     changeOrigin: true, //可否跨域
    //     pathRewrite: {
    //       '^/api': '/' //重写接口，去掉/api
    //     }
    //   },
    //   '/sign': {
    //     //替换代理地址名称
    //     target: 'http://192.168.1.106:8082', //代理地址
    //     ws: true,
    //     changeOrigin: true, //可否跨域
    //     pathRewrite: {
    //       '^/sign': '/' //重写接口，去掉/api
    //     }
    //   }
    // } // 配置多个代理
  }
}
