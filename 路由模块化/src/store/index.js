import Vue from 'vue'
import Vuex from 'vuex'
import per from 'vuex-persistedstate'
Vue.use(per)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    special:[],
    ID:''
  },
  mutations: {
    getSpecial(state,arr){
      state.special = arr
    },
    setId(state,id){
      state.ID = id
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[per()]
})
