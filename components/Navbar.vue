<template>
  <nav class="navbar has-background-black-bis " role="navigation" aria-label="main-navigation">
    <div class="container">
      <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <!-- <img src="../assets/images/hisia.jpg" width="60" height="10"> -->
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
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>

        <nuxt-link class="navbar-item" to="/pricing">Pricing</nuxt-link>

        <nuxt-link class="navbar-item" to="/services">Services</nuxt-link>
      </div>
    </div>

    <div class="navbar-end" v-if="isAuth">
      <div class="navbar-item" >

        <nuxt-link class="button is-info" to="/login" v-on:click.native="logout">
            <strong>log out</strong>
          </nuxt-link>
      </div>
    </div>
  <div class="navbar-end" v-else>
    <div >
      <div class="navbar-item" >
          <nuxt-link class="button is-info" to="/register">
            <strong>sing up</strong>
          </nuxt-link>
      </div>
    </div>

  <div class="navbar-end">
      <div class="navbar-item">
          <nuxt-link class="button is-light" to="/login">Login</nuxt-link>
      </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters ,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters(['isAuth']),
    ...mapMutations(['logoutMutation'])
  },
  methods: {
    logout() {
      // console.log('logout called')
      this.logoutMutation()
    }
  }
}
</script>

<style>

</style>
