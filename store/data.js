export const state = () => ({
  data: {}
})

export const mutations = {
  add (state, data) {
    state.data = data;
  }
}
