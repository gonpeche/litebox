import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueMq from 'vue-mq'
import store from './store'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})
Vue.config.productionTip = false

window.mainVueObj = new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
