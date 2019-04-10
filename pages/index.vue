<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-one-third has-text-centered">
              <div class="content has-text-justified has-text-weight-bold">
                <p class="is-styled-font title is-2">Hisia</p>
                <p class="is-display-font subtitle is-3">EMPOWERING GROWTH WITH REAL DATA</p>
              </div>
            </div>
            <div class="column">
              <img src="../assets/images/background3.png" alt="data chart">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body has-background-light">
        <div class="container">
          <div class="columns is-vcentered is-spaced">
            <div class="column">
              <figure class="image is-1by1">
                <img src="../assets/images/team.svg" alt="about us">
              </figure>
            </div>
            <div class="column is-one-third has-text-centered">
              <div class="content has-text-justified has-text-weight-bold">
                <p class="is-styled-font title is-2">About Us</p>
                <p class="is-display-font subtitle is-3">What is hisia</p>
                <p>
                  We are a data driven company that believes the future of doing business is in understanding business
                  generated data.We believe in emporing businesses with the ability to better understand their customers
                  with the aim of improving their relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <p class="is-styled-font title is-1 has-text-centered">???</p>
          <p class="is-display-font subtitle is-1 has-text-centered">How It Works</p>
          <div class="columns is-centered">
            <div class="column is-three-quarters">
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image is-3by2">
                    <img src="../assets/images/data1.svg" alt="about us">
                  </figure>
                </div>
                <div class="column has-text-centered">
                  <div class="content has-text-justified has-text-weight-bold">
                    <p class="is-styled-font title is-2">What we do</p>
                    <p class="is-display-font subtitle is-3">What we do </p>
                    <p>
                      We bring the power of analysis to businesess by providing a platform that gives businesses the
                      power to know beyond just what to provide to the consumers but how and where to provide these services.
                      By a click of a button your business can be able to know how your consumers feel about your products.
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns is-vcentered">
                <div class="column has-text-centered">
                  <div class="content has-text-justified has-text-weight-bold">
                    <p class="is-styled-font title is-2">How we do it</p>
                    <p class="is-display-font subtitle is-3">How we do it</p>
                    <p>
                       We provide a simple dashboard to businesses where they can carry out analysis.
                      This is made possible by just keying in the business product name and letting us
                      do the heavy lifting.With a well trained Recurrent Neural Network we provide analytics
                      of the business social media data and also provide well explained data visualization
                      graphs to aid in better understaning of the analysis.

                    </p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image is-3by2">
                    <img src="../assets/images/data2.svg" alt="about us">
                  </figure>
                </div>
              </div>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image is-3by2">
                    <img src="../assets/images/data3.svg" alt="about us">
                  </figure>
                </div>
                <div class="column has-text-centered">
                  <div class="content has-text-justified has-text-weight-bold">
                    <p class="is-styled-font title is-2">Contact Us</p>
                    <p class="is-display-font subtitle is-3">Where to get us</p>
                    <p>Email: hisiaapp@gmail.com</p>
                    <p>Phone: 0700184646</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style>
  .has-background-dark-green {
    background-color: #009688;
  }
 </style>
