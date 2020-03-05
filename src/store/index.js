import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    length:'100',
    activePageName: 'origin',
    icons: [
      {
        id: 'origin',
        text: 'origin'
      },
      {
        id: 'mutate',
        text: 'mutate'
      },
    ],
  },
  getters: {
    length(state){
      return state.length
    },
    activePageName(state){
      return state.activePageName
    },
    icons(state){
      return state.icons
    },
  },
  mutations: {
    setLength(state,payload) {
      state.length = payload
    },
    setActivePageName(state,payload) {
      state.activePageName = payload
    },
  },
  actions: {
    setLength({ commit },value) {
      commit('setLength',value)
    },
    setActivePageName({ commit },e) {
      commit('setActivePageName',e.currentTarget.getAttribute('data-icon-text'))
    },
  },
  modules: {
  }
})
