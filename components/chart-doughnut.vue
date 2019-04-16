<template>
  <div>
    <h2>Data Visualization</h2>
    <div class="card" >
      <chartjs-doughnut
        v-bind:bind="true"
        v-bind:datasets="datasets"
        v-bind:labels="labels"
        v-bind:option="option"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: {},
      posAverage: 0,
      negAverage: 0,
      datasets: [
        {
          data: [],
          backgroundColor: ["#b388ff", "#82b1ff"],
          hoverBackgroundColor: ["#673ab7", "#2196f3"]
        }
      ],
      labels: ["Positive", "Negative",],
      option: {}
    };
  },
  beforeMount(){
    this.results = this.$store.state.data.data
    this.populateGraphData()
  },
  methods: {
    populateGraphData() {
      var pos = 0
      var neg = 0
      for( let i=0; i<this.results.length; i++) {
        pos =+this.results[i].percentage.pos;
        neg =+this.results[i].percentage.neg;
      }
      this.posAverage = pos / this.results.length
      this.negAverage = neg / this.results.length
      var dataVal = [this.posAverage,this.negAverage]
      this.datasets[0].data = dataVal
    }
  }
};
</script>
