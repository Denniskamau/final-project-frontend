<template>
  <nav class="navbar is-light is-fixed-top has-background-white-ter" role="navigation" aria-label="main-navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item is-styled-font" to="/">
          Hisia
        </nuxt-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenus">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenus" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item " to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/price">Pricing</nuxt-link>
        </div>
      </div>
      <div class="mavbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" v-if="auth">
          <a class="navbar-link">
            <!-- User name -->
            {{prof.business}}
          </a>
          <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
              <hr class="navbar-divider">
              <nuxt-link class="navbar-item" @click="logout" to="/">Logout</nuxt-link>
            </div>
        </div>
        <template v-else>
          <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
          <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
        </template>
      </div>
      </div>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    // auth() {
    //   return this.$store.getters.isAuthenticated
    // }
    ...mapGetters({
      auth: 'authentication/isAuthenticated',
      prof: 'authentication/getUser'
    })
  },
  methods :{
    logout() {
      this.$store.commit('authentication/setAuthenticatedFalse')
        .then(() => {
          this.$router.push('/')
        })

    }
  }
};
</script>

<style>

</style>
