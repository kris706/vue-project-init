import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Md5 from 'js-md5'
import i18n from './lang/index.js'
// 引入公共样式表
import 'normalize.css'
import 'style/main.less'
// element-ui 组件引入
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$md5 = Md5 // 将md5注册到vue的原型上
Vue.use(ElementUi, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
