<template>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered has-text-success has-text-weight-bold ">Register!</h2>
    <p class="has-text-danger" variant="danger" v-show="loginFailed" dismissible>Sorry, something went wrong, please try again!.</p>
    <form @submit.prevent="register">
    <div class="field">
      <label class="label" :invalid-feedback="errors.first('business name')" :state="!errors.has('business name')">Business Name</label>
      <span v-show="errors.has('business name')" class="error has-text-danger">{{ errors.first('business name') }}</span>
      <div class="control">
        <input class="input is-rounded" type="text"
              placeholder="Business name"
              name="business name"
              v-model="signup.business_name"
              v-validate="'required'" >
      </div>
    </div>

    <div class="field">
      <label class="label" :invalid-feedback="errors.first('email')" :state="!errors.has('email')">Email</label>
      <span v-show="errors.has('email')" class="error has-text-danger">{{ errors.first('email') }}</span>
      <div class="control has-icons-left ">
        <input class="input is-rounded " type="email"
                placeholder="Email input"
                v-model="signup.email"
                name="email"
                v-validate="'required|email'" >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label" :invalid-feedback="errors.first('password')" :state="!errors.has('password')">Password</label>
      <span v-show="errors.has('password')" class="error has-text-danger">{{ errors.first('password') }}</span>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="password"
                placeholder="Password input"
                name="password"
                v-model="signup.password"
                v-validate="'required'">
      </div>
    </div>


    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
          </label>
      </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link is-rounded">Submit</button>
        </div>
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
  name: 'Signup',
  data() {
    return {
      signup: {},
      loginFailed: false
    };
  },
  methods: {
     async register() {
      await this.$validator.validateAll()
      if (this.errors.any()) {
        console.log('errors',JSON.stringify(this.errors))
        return
      }
      console.log(`calling axios with ${JSON.stringify(this.signup)}`)
      try {
        this.loginFailed = false
        let newUser = await axios.post('http://127.0.0.1:5000/auth/register', this.signup)
        console.log(`user data ${JSON.stringify(newUser)}`)
        // this.loginUser(newUser.data.token)
        this.$router.push('/login')
      }catch (e){
        console.log(`login failed ${JSON.stringify(e)}`)
        this.loginFailed = true
      }

    },

  }
}
</script>

<style>

</style>
