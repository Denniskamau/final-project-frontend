<template>
<div>
<div class="main">
   <section class="hero">
    <div class="hero-head">
        <Navbar />
      </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
        <div class="column is-one-quarter">
<!-- Sidebar -->
<Sidebar />
  </div>
<div class="column is-6 ">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Instructions</p>
    </header>
    <div class="card-content">
      <div class="content">
          <p>1)Input search term and press search to start analysis</p>
          <p>2)This will stream in social media data with the seach term you provided</p>
          <p>3)Analysis will be carried out and the results displaysed in a table format below.</p>

          <br>
      </div>
    </div>
  </div>
  <br>
  <br>
      <form method="post" @submit.prevent="startStream">
      <div class="field">
        <input class="input is-rounded" type="text"
        placeholder="Input text"
        name="search"
        v-model="search.query"
        >
      </div>
      <div class="field is-grouped">
        <div class="control">
            <button class="button is-link is-rounded">Search</button>
            <p  class="has-text-success" v-show="start">{{ message }}</p>
        </div>
    </div>

      </form>
      <br>
      <br>
      <p v-if="finish">Analysis for the first {{length}} tweets</p>
      <table class="table is-bordered is-striped" v-if="finish">
        <thead>
          <tr>
            <th>Text</th>
            <th>Analysis</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody v-for="(data,index) in results" :key="index">
          <td>
            {{data.tweet}}
            </td>
          <td>
            <span class="tag has-background-success is-medium">{{data.message}}</span>
            </td>
          <td>
            <span class="tag is-info is-medium">{{data.percentage}}</span>
            </td>
        </tbody>
      </table>
      </div>
      <div class="column is-6 " >
      <div class="tile is-ancestor">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box">
             <p class="title">Your Search Terms</p>
              <ul v-for="(item,index) in word" :key="index">
                <li >{{item.query}}</li>
              </ul>

          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
   </section>
</div>
</div>
</template>

<script>
import axios from 'axios';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar'
import { mapGetters } from 'vuex'

export default {
  middleware: 'strict',
  name: 'dashboard',
    components: {
    Navbar,
    Sidebar,

  },
  data () {
    return {
      search: {},
      results: {},
      finish:false,
      searchWords: [],
      length:0,
      start:false,
      message:'Starting Streaming Data... '
    }
  },
  computed : {
    getData(){
      console.log('getting data')
      this.results = this.$store.getters('data/getData')
      this.length = this.results.length()
      this.finish = true
    },
    ...mapGetters({
      word: 'data/getSearchTerms',
      sentiment: 'data/getData'
    })
  },
  methods: {
    searchParameters() {
        var word = this.search
        this.searchWords.push(word);
    },

    // start streaming data
    async startStream() {
      try {
        this.start = true
        let resp = await axios.post('http://127.0.0.1:5000/stream', this.search)
        this.results = resp.data
        this.length= this.results.length
        this.finish = true
        this.$store.dispatch('data/addSearchTerms',this.search)
        this.$store.dispatch('data/addStateData', this.results)
        this.start = false
      }catch (e){
        return e
      }
    }
  }

}
</script>

<style scoped>
.menu {
  margin-top: 5%;
  margin-left: 2%;

}
.card {
  margin-top:10%;
  background-color: #009688;
}
.tile {
  margin-top: 5%;
}
</style>
