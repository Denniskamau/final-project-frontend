import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authenticated: false,
  loading: false,
  token:''
}

const getters = {
  isAuth: state => state.authenticated,
  isLoading: state => state.loading,
  tokenValue: state => state.token
}

const mutations = {
  loginMutation (state,token) {
    console.log('authenticated!')
    Vue.set(state, 'authenticated', true)
    Vue.set(state, 'loading', false)
    sessionStorage.setItem('token',token)
    Vue.set(state, 'token', token)
  },

  logoutMutation (state) {
    Vue.set(state, 'authenticated', false)
    sessionStorage.removeItem('token')
    Vue.set(state, 'token', '')
  },

  changeLoadingState(state){
    Vue.set(state, 'loading', true)
    }


}

const actions = {
  // nuxtServerInit({commit}, {req}){
  //   console.log('nuxtServerInit')
  //   if (req.session && req.session.authUser){
  //     commit('login')
  //   }else {
  //     commit('logout')
  //   }
  // },
  loginUser({commit},token){
    console.log(`token is ${token}`)
    commit('loginMutation',token)
  },
  logoutUser({commit}){
    commit('logoutmutation')
  }
}

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
