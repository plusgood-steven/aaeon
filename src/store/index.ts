import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    token: "",
  },
  mutations: {
    changeisLogin(state, value) {
      state.isLogin = value;
    },

    changeToken(state, value: string) {
      state.token = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
