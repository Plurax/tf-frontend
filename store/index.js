export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  rawJwt(state) {
    return substring(7, state.auth._token.local); 
  },
  loggedInUser(state) {
    return state.auth.user;
  },
};

