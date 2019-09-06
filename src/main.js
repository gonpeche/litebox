import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.mainVueObj = new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
