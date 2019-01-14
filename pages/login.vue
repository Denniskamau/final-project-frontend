<template>
<section class="section">
  <div class="container">
  <div class="columns " >
    <div  class="column is-4 is-offset-4">

  <h2 class="title has-text-centered">Welcome back!</h2>

  <form method="post" @submit.prevent="login">

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="email"
              placeholder="Email input"
              name="email"
              v-model="loginData.email"
              required >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left">
      <label class="label">Password</label>
      <div class="control">
        <input class="input is-rounded "
              type="password"
              placeholder="Password input"
              name="password"
              v-model="loginData.password"
              required >
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link is-rounded">Submit</button>
        </div>
    </div>
<div>
<p>Don't have an account?
  <nuxt-link to="/register">Create one Now </nuxt-link>
</p>

</div>
  </form>
    </div>
</div>
  </div>
</section>
</template>

<script>
export default {
  name: 'login',
  data () {
     return {
       loginData: {}
     }
  },
  methods: {
    // Collect and send user credentials to backend
    login() {
      //console.log(`login details ${JSON.stringify(this.loginData)}`)
      this.$store.dispatch('LOGIN_REQUEST', this.loginData, { module: 'auth' })
        .then(() => {
          this.$router.push('/register/personal');
        })
        .catch(error => error);
    }
  }

}
</script>

<style >

</style>
