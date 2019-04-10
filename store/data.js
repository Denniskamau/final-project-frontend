export const state = () => ({
  data: {},
  searchTerms:[]
})

export const mutations = {
  add (state, data) {
    state.data = data;
  },
  addSearchTerms(state,payload){
    state.searchTerms.push(payload)
  }
}

export const getters = {
  getSearchTerms(state){
    return state.searchTerms
  },
  getData(state){
    return state.data
  }
}

export const actions = {
  addStateData({commit},payload) {
    commit('add', payload);
  },
  addSearchTerms({commit}, payload) {
    commit('addSearchTerms', payload);
  }
}
