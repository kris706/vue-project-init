import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Md5 from 'js-md5'
// 引入公共样式表
import 'normalize.css'
import 'style/main.less'
// element-ui 组件引入
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$md5 = Md5 // 将md5注册到vue的原型上
Vue.use(ElementUi, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
