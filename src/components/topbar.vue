<template>
  <div id="topbar">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Fleet</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/users" class="nav-link">
            <font-awesome-icon icon="user" />
            Users
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top-bar",
  computed: {
    ...mapGetters(["getUsers"]),
    users() {
      return this.getUsers;
    },
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
