<template>

  <div>
    <h2>Bar</h2>
    <div class="card">
      <canvas id="fooCanvas" count="2" />

      <chartjs-bar
        v-for="(item, index) in types"
        v-bind:key="index"
        v-bind:backgroundcolor="item.bgColor"
        v-bind:beginzero="beginZero"
        v-bind:bind="true"
        v-bind:bordercolor="item.borderColor"
        v-bind:data="item.data"
        v-bind:datalabel="item.dataLabel"
        v-bind:labels="labels"
        target="fooCanvas"
      />
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      results: {},
      beginZero: true,
      labels: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"],
      types: [
        {
          bgColor: "#ff80ab",
          borderColor: "#e91e63",
          data: [],
          dataLabel: "Positive"
        },
        {
          bgColor: "#ea80fc",
          borderColor: "#9c27b0",
          data: [],
          dataLabel: "Negative"
        }
      ]
    };
  },
  beforeMount(){
    this.results = this.$store.state.data.data
    this.populateBarGraph()
  },
  methods: {
    populateBarGraph(){
      var dataset = this.results
      var posData= []
      var negData = []
      var slicedPos = []
      var slicedNeg = []
      for( let i=0; i< this.results.length; i++) {
        posData.push(this.results[i].percentage.pos)
        negData.push(this.results[i].percentage.neg)
      }
      slicedPos.push(posData.slice(-7));
      slicedNeg.push(negData.slice(-7));
      this.types[0].data = slicedPos;
      this.types[1].data = slicedNeg;
      console.log('positive types:'+ this.types[0].data)
      console.log('negative types:'+ this.types[1].data)
    }
  }
};
</script>
