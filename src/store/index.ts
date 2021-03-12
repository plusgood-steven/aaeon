import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
  },
  mutations: {
    changeisLogin(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
