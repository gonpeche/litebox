import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    catalog: []
  },
  mutations: {
    addToCatalog (state, newMovie) {
      state.catalog.push(newMovie)
    }
  },
  getters: {
    selectedMovie: state => state.selectedMovie
  }
})

export default store
