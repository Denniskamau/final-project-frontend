<template>
  <section class="section">
    <div class="container">
      <Navbar />
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Business Name:</strong>
          {{ prof.business }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ prof.user }}
        </p>
        <p>Back To Dashboard
           <nuxt-link to="/dashboard">Click Me!! </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar';
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      auth: 'authentication/isAuthenticated',
      prof: 'authentication/getUser'
    })
  },
}
</script>
<style>
.title {
  margin-top: 5%
}
.content {
  margin-top: 1%
}
</style>
