export const state = () => ({
  counter: 0,
  percentage: {},
  results: {}
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  modifyResults (state,data) {
    state.results = data;
  }
}
