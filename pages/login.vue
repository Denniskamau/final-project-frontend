<template>
<section class="section">
  <div class="container">
  <div class="columns " >
    <div  class="column is-4 is-offset-4">

  <h2 class="title has-text-centered  has-text-success has-text-weight-bold ">Welcome back!</h2>

  <p class="has-text-danger" variant="danger" v-show="loginFailed" dismissible>Sorry, invalid email or password.</p>
  <form method="post" @submit.prevent="login">

    <div class="field">
      <label class="label" :invalid-feedback="errors.first('email')" :state="!errors.has('email')">Email</label>
      <span v-show="errors.has('email')" class="error has-text-danger">{{ errors.first('email') }}</span>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="email"
              placeholder="Email input"
              name="email"
              v-model="loginData.email"
              v-validate="'required|email'"
              >

        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left">
      <label class="label" :invalid-feedback="errors.first('password')" :state="!errors.has('password')">Password</label>
      <span v-show="errors.has('password')" class="error has-text-danger">{{ errors.first('password') }}</span>
      <div class="control">
        <input class="input is-rounded "
              type="password"
              placeholder="Password input"
              name="password"
              v-model="loginData.password"
              v-validate="'required'"
               >
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
import { mapActions ,mapMutations} from 'vuex'
import axios from 'axios'
export default {
  //middleware: 'guest',
  name: 'login',
  data () {
     return {
       loginData: {},
       loginFailed: false
     }
  },
  methods: {
    // Collect and send user credentials to backend
    async login() {
      await this.$validator.validateAll()
      if (this.errors.any()) {
        console.log('errors',JSON.stringify(this.errors))
        return
      }
      console.log(`calling axios with ${JSON.stringify(this.loginData)}`)
      try {
        this.loginFailed = false

        let user = await axios.post('http://127.0.0.1:5000/auth/login', this.loginData)
        console.log(`user data ${JSON.stringify(user)}`)

        this.$store.dispatch('authentication/setAthenticatedTrue', user.data)
        this.$router.push('/dashboard')
      }catch (e){
        console.log(`login failed ${JSON.stringify(e)}`)
        this.loginFailed = true
      }
    },
  }
}
</script>

<style >
</style>
