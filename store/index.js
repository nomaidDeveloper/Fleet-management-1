import { createStore } from "vuex";
import { userService } from "../helpers/services/userServices";

const store = createStore({
  state: {
    users: [],
    status: {},
    user: null,
    userTemp: null,
    isAuthenticated: false
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggeduser: true };
      if (typeof user == "string") {
        user = JSON.parse(user);
      }
      state.isAuthenticated = true
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
      state.userTemp = null;
    },
    registerRequest(state) {
      state.status = { registering: true };
    },
    registerSuccess(state) {
      state.status = {};
    },
    logout(state) {
      state.status = {};
      state.user = null;
      state.userTemp = null;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    removeUser(state, user) {
      const index = state.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    updateUser(state, user) {
      const index = state.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        state.users[index] = user;
      }
    },
  },
  actions: {
    // Logs in the user.
    login({commit }, { email, password }) {
      commit("loginRequest", { email });
      userService.login(email, password).then(
        (user) => {
          commit("loginSuccess", user.data);
          // this.$router.push({ path: "/" });
        },
        (error) => {
          commit("loginFailure", error);
        }
      );
    },

    // Logout the user
    logout({ commit }) {
      userService.logout();
      commit("logout");
    },
    // register the user
    registeruser({ commit }, user) {
      commit("registerRequest", user);
      userService.register({ ...user, domain: window.location.host }).then(
        (user) => {
          commit("registerSuccess", user);
          this.$router.push({ path: "/login" });
        },
        (error) => {
          commit("registerFailure", error);
        }
      );
    },
    addUser({ commit }, user) {
      commit("addUser", user);
    },
    removeUser({ commit }, user) {
      commit("removeUser", user);
    },
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
  },
  getters: {
    getUsers: (state) => state.users,
  },
  
});
// store.subscribe((mutation, state) => {
//   // Check if the user is not authenticated
//   const loggeduser = store.state.user;
//   console.log(state.user.loggeduser,"store.state.user+-++++++++++++++++++++++++++dsdsd");
//   if (!loggeduser) {
//     return window.location.href = '/login'
//   }
//   if (!state.user.loggeduser) {
//     // Redirect to login page if the user is not already there
//     if (window.location.pathname !== '/login') {
//       window.location.href = '/login'
//     }
//   }
// })
export default store;
