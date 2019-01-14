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
        <input class="input is-rounded" type="text" placeholder="Business name">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded " type="email" placeholder="Email input" >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="password" placeholder="Password input" >
      </div>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="password" placeholder="Password input" >
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
}
</script>

<style>

</style>
