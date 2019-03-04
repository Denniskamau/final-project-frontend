<template>
<div class="container is-fluid ">
  <div class="column is-2 has-background-black-bis ">
  <aside class="menu has-text-success" >
    <p class="menu-label has-text-success">Dashboard</p>
    <ul class="menu-list ">
      <nuxt-link to="/dashboard" class="has-text-success">Search</nuxt-link>
      <nuxt-link to="/analysis" class="has-text-success">Analysis</nuxt-link>
    </ul>
  </aside>
  </div>
  <div class="has-text-success has-background-black-bis">
  <section class="section">
    <div class="container">
      <div class="column is-4 is-offset-2">
      <form method="post" @submit.prevent="startStream">
      <p>Input search term to start analysis</p>
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
      </div>
      <div>
        <table class="table is-bordered is-striped is-narrow is-hoverable" v-if="finish">
          <thead>
            <tr>
              <th>Positive text</th>
              <th>Negative text</th>
            </tr>
          </thead>
          <tbody v-for="res in results" :key="res">
            <td v-if="res.message === 'Positive Sentiment'">{{res.tweet}}</td>
            <td v-if="res.message === 'Negative Sentiment'">{{res.tweet}}</td>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  //middleware: 'strict',
  name: 'dashboard',
  data () {
    return {
      search: {},
      results: {},
      finish:false
    }
  },
  methods: {
    // start streaming data
    async startStream() {
      try {
        let resp = await axios.post('http://127.0.0.1:5000/stream', this.search)
        this.results = resp.data
        this.finish = true
        console.log(`response ${JSON.stringify(this.results)}`)
      }catch (e){
        return e
      }
    }
  }

}
</script>

<style>

</style>
