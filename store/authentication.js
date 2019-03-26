export const state = () => ({
  isAuthenticated:false,
  user: {}
})

export const mutations = {
  setAthenticatedTrue(state,payload){
    state.isAuthenticated = true;
    localStorage.setItem('token', payload.token)
    state.user = payload
  }
}

export const getters = {
  isAuthenticated(state){
    return state.isAuthenticated
  },
  getUser(state) {
    return state.user
  }
}

export const actions = {
  sendMail(payload){

  }
}