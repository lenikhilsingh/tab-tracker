import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
// But any data that is to be shared between components, i.e. application data,
// needs to be kept in a single place, separate from the components that use it.

// This single location is called the “store”.
// Components must read application data from this location and not keep their
// own copy to prevent conflict or disagreement.

export default new Vuex.Store({
  // stric: true which means you can never modify the state
  strict: true,
  plugins: [createPersistedState()],
  // this is how vuex works, you always have actions, mutations and state'
  // "State" is the application data your components
  // will subscribe to
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  //  Components can freely read data from the store. But they cannot change data in
  //  the store, at least not directly.
  //  Instead they must inform the store of their intent to change the data and
  //  the store will be responsible for making those changes via a set of defined functions called “mutations”.
  //  Why this approach? If we centralise the data-altering logic than we don’t have to
  //  look far if there are inconsistencies in the state. We’re minimising the possibility
  //  that some random component (possibly in a third party module) has changed the data in
  //  an unexpected fashion.
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  }
});
