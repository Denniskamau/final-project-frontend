export const getters = {
  // return the authentication status
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  // return the details of the loggein user
  loggedInUser(state) {
    return state.auth.user
  }
}
