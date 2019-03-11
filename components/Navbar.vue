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
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/price">Pricing</nuxt-link>
          <nuxt-link class="navbar-item" to="/services">Services</nuxt-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-rounded is-dark" to="/register">
              Sign Up
            </nuxt-link>
            <nuxt-link class="button is-dark is-outlined is-rounded" to="/login">
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>

</style>
