import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios

import login from '@/components/loading/loading.js'

Vue.use(login)

import './assets/css/html.css'
import './assets/css/base.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
