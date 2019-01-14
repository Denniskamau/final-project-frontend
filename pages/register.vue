<template>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Register!</h2>

    <form @submit.prevent="register">
    <div class="field">
      <label class="label">Business Name</label>
      <div class="control">
        <input class="input is-rounded" type="text"
              placeholder="Business name"
              name="business_name"
              v-model="signup.business_name"
              required >
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded " type="email"
                placeholder="Email input"
                v-model="signup.email"
                name="email"
                required >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="password"
                placeholder="Password input"
                name="password"
                v-model="signup.password"
                required >
      </div>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="password"
               placeholder="Password input"
               name="confirm_password"
               v-model="singup.confirm_password"
               required>
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
export default {
  name: 'Signup',
  data() {
    return {
      signup: {},
    };
  },
  methods: {
    register() {
      this.$store.dispatch('LOGIN_REQUEST', this.loginData, { module: 'auth' })
        .then(() => {
          this.$router.push('/login');
        })
        .catch(error => error);
    }
  }
}
</script>

<style>

</style>
