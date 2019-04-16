<template>
  <div class="main is-4">
    <section class="hero">
      <div class="hero-head">
          <Navbar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter">
            <Sidebar />
            </div>
            <div class="column is-6 graph">

              <ChartDoughnut />
              <br>
              <br>
              <!-- <ChartBar /> -->
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import ChartDoughnut from "~/components/chart-doughnut";
import ChartBar from "~/components/chart-bar";
import Bar from "~/components/bar";
export default {
 name: 'analysis',
  components: {
    Navbar,
    Sidebar,
    Bar,
    ChartBar,
    ChartDoughnut
  },
}
</script>

<style scoped>
.menu {
  margin-top: 5%;
  margin-left: 2%;

}
.grid {
  display: grid;
  row-gap: 2rem;
}
.graph {
  margin-top: 10%;
}
</style>
