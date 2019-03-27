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
  }
}

export const actions = {
  sendMail(payload){

  }
}
