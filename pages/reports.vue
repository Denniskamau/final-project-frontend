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
            <div class=" mail column is-6">
              <p>Input email address in the field below and click send to receive report</p>
              <br>
            <form method="post" @submit.prevent="sendReport">
              <div class="field column is-5">
              <label class="label" :invalid-feedback="errors.first('email')" :state="!errors.has('email')">Email</label>
              <span v-show="errors.has('email')" class="error has-text-danger">{{ errors.first('email') }}</span>
              <input class="input is-rounded" type="email"
                placeholder="Input email"
                name="email"
                v-validate="'required|email'"
                v-model="data.email"
                >

      </div>
      <div class="field is-grouped">
        <div class="control">
            <button class="button is-link is-rounded">Send</button>
        </div>
    </div>
      </form>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar'

export default {
 name: 'Reports',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      data: {
        email:"",
        results: {
          analysis:[]
        },
        sent:false,
        delivered:false,
      },
    }
  },
  methods: {
    async sendReport() {
      this.sent = true;
      console.log('sent value', this.sent)
      var analysisData = this.$store.state.data.data
      //console.log('analysis data'+ JSON.stringify(analysisData))
      this.data.results.analysis = analysisData
      try {
        //console.log('sending data'+JSON.stringify(this.data))
        let resp = await axios.post('http://127.0.0.1:5000/mail', this.data)
        this.sent = false;
        this.delivered = true;
      }catch (e){
        return e
      }
    }
  }
}
</script>

<style>
.menu {
  margin-top: 5%;
  margin-left: 2%;

}
.mail {
  margin-top: 10%
}

</style>
