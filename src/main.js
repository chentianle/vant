import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import httpRequest from '@/axios'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法