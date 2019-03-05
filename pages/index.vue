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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos ipsa corrupti obcaecati
                  vel ad, iusto fuga esse molestias in odit blanditiis suscipit quibusdam. Velit repudiandae culpa
                  corporis reprehenderit debitis.
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
                    <p class="is-styled-font title is-2">About Us</p>
                    <p class="is-display-font subtitle is-3">What is hisia</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos ipsa corrupti
                      obcaecati vel ad, iusto fuga esse molestias in odit blanditiis suscipit quibusdam. Velit
                      repudiandae culpa corporis reprehenderit debitis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns is-vcentered">
                <div class="column has-text-centered">
                  <div class="content has-text-justified has-text-weight-bold">
                    <p class="is-styled-font title is-2">About Us</p>
                    <p class="is-display-font subtitle is-3">What is hisia</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos ipsa corrupti
                      obcaecati vel ad, iusto fuga esse molestias in odit blanditiis suscipit quibusdam. Velit
                      repudiandae culpa corporis reprehenderit debitis.
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
                    <p class="is-styled-font title is-2">About Us</p>
                    <p class="is-display-font subtitle is-3">What is hisia</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos ipsa corrupti
                      obcaecati vel ad, iusto fuga esse molestias in odit blanditiis suscipit quibusdam. Velit
                      repudiandae culpa corporis reprehenderit debitis.
                    </p>
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
