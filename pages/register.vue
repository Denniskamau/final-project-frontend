<template>
<div class="columns is-centered" >
    <form @submit.prevent="LOGIN()" class="column is-one-fifth">
    <div class="field">
      <label class="label">Business Name</label>
      <div class="control">
        <input class="input is-rounded" type="text" placeholder="Business name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
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
