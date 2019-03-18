<template>
  <div class="main is-4">
    <section class="hero">
      <div class="hero-head">
          <Navbar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter">
            <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar'

export default {
 name: 'Reports',
  components: {
    Navbar,
    Sidebar
  },
}
</script>

<style>
.menu {
  margin-top: 5%;
  margin-left: 2%;

}
</style>
