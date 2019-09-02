import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  },
  mutations: {
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
