import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    selectedMovie: {}
    // catalog: []
  },
  mutations: {
    addToCatalog (state, selectedMovie) {
      state.selectedMovie = {}
    }
  },
  getters: {
    selectedMovie: state => state.selectedMovie
  }
})

export default store
