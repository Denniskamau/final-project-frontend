<template>
<div class="columns is-centered" >
  <form @submit.prevent="LOGIN()" class="column is-one-fifth">

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left ">
        <input class="input is-rounded" type="email" placeholder="Email input" >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left">
      <label class="label">Password</label>
      <div class="control  ">
        <input class="input is-rounded " type="password" placeholder="Password input" >
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
  </form>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
     return {
       login: {}
     }
  }

}
</script>

<style >
.form-heading {
  font-weight: 300;
}

.bg-image {
  background-image: url('../assets/images/background.png');
  background-size: cover;
  background-position: center;
}

.reg-body {
  height: 100vh;
  min-height: 500px;
}

.form-group.required .control-label:after {
  content:"*";
  color:red;
}


</style>
