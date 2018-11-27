import Vue from 'vue'
import App from './App'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'

//注册全局组件
Vue.component('TopHeader',TopHeader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>',
  router
})
