<template>
  <vue-particles
    color="#000"
    :particleOpacity="1"
    :particlesNumber="80"
    shapeType="polygon"
    :particleSize="4"
    linesColor="#000"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.7"
    :linesDistance="100"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push">
  </vue-particles>
</template>

<script>
import Vue from 'vue';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

export default {
  name: 'vue-particles',
};
</script>

<style>

</style>
