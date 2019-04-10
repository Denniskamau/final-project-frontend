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
        </div>
    </div>
      </form>
      <br>
      <br>
      <table class="table is-bordered is-striped" v-if="finish">
        <thead>
          <tr>
            <th>Text</th>
            <th>Analysis</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody v-for="data in results" :key="data">
          <td>
            {{data.tweet}}
            </td>
          <td>
            <span class="tag is-light is-medium">{{data.message}}</span>
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
              <ul v-for="item in word" :key="item">
                <li>{{item.query}}</li>
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
    Sidebar
  },
  data () {
    return {
      search: {},
      results: {},
      finish:false,
      searchWords: []
    }
  },
  computed: {
    // auth() {
    //   return this.$store.getters.isAuthenticated
    // }
    ...mapGetters({
      word: 'data/getSearchTerms',
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
        let resp = await axios.post('http://127.0.0.1:5000/stream', this.search)
        this.results = resp.data
        this.finish = true
        this.$store.dispatch('data/addSearchTerms',this.search)
        this.$store.dispatch('data/addStateData', this.results)
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
