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
              <input class="input is-rounded" type="text"
                placeholder="Input email"
                name="email"

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
      data: {},
    }
  },
  methods: {
    sendReport() {

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
