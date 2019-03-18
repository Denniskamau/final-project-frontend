<template>
  <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><nuxt-link to="/dashboard">Search</nuxt-link></li>
    <li><nuxt-link to="/graphs">Graphs</nuxt-link></li>
    <li><nuxt-link to="/maps">Maps</nuxt-link></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><nuxt-link to="/reports">Reports</nuxt-link></li>
  </ul>

</aside>
</template>

<script>
export default {
 name: 'Navbar',
}
</script>

<style>

</style>
