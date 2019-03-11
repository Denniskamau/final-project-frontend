<template>
<div>
<div class="main">
   <section class="hero">
    <div class="hero-head">
        <Navbar />
      </div>
    <div class="hero-body">
      <div class="container ">
        <div class="columns">
        <div class="column is-one-quarter">
<aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>
  </div>
<div class="column is-4 ">
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

export default {
  //middleware: 'strict',
  name: 'dashboard',
    components: {
    Navbar
  },
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

<style scoped>
.main {
  padding-top: 2%;
}
.sidebar {
  padding-left: 0%;
  padding-top: 2%;
}
</style>
