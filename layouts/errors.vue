<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box" v-if="error.statusCode === 404">
          <div class="content">
            <h1 class="title is-1">
              404
            </h1>
            <h3 class="subtitle">
              Page not found
            </h3>
            <nuxt-link to="/">Go Back Home</nuxt-link>
          </div>
        </div>
        <div class="box" v-if="error.statusCode === 500">
          <div class="content">
            <h1 class="title is-1">
              404
            </h1>
            <h3 class="subtitle">
              Page not found
            </h3>
            <nuxt-link to="/">Go Back Home</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<style>

</style>
