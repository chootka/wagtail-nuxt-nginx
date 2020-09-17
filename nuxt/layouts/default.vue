<template>
  <div class="wrapper">
    <div class="container">
      <nav
        class="navbar header is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <div v-for="(item, key) of globalItems" :key="key">
            <a v-if="item.external" :href="item.external" class="navbar-item" exact-active-class="is-active">
              {{ item.title }}
            </a>
            <nuxt-link v-else :to="item.to" class="navbar-item" exact-active-class="is-active">
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
    <div id="content" class="container">
      <Nuxt />
    </div>
    <footer class="footer">
      <span>mysite.com <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"><span id="cc_icon"></span><span id="by_icon"></span></a> 2020</span>
    </footer>
  </div>
</template>

<style>
@font-face {
  /*font-family: "Brutal";*/
  /*src: url("../assets/fonts/brutal/BrutalTypeW00Regular.ttf") format("truetype"); */
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
@font-face {
  /*font-family: "BrutalMedium";*/
  /*src: url("../assets/fonts/brutal/BrutalTypeW00Medium.ttf") format("truetype"); */
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
@font-face {
  /*font-family: "BrutalBold";*/
  /*src: url("../assets/fonts/brutal/BrutalTypeW00Bold.ttf") format("truetype"); */
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
html, 
body {
  /*font-family:
    'Brutal',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;*/
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.navbar.is-primary {
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar-brand {
  display: flex;
}
.navbar-link,
a.navbar-item,
.navbar-link.is-active,
a.navbar-item.is-active {
  color: #fff;
  margin-left: 30px;
}
.navbar-link.is-active,
a.navbar-item.is-active {
  text-decoration: line-through;
}
#content {
  margin-top: 80px;
}
.footer {
  display: flex;
  align-content: center;
  flex-shrink: 0;
  margin-top: 2em;
  padding: 1.5em;
  background: #000;
  font-size: .9em;
}
.footer a {
  color: #ccc;
}
.footer span {
  color: #999;
}
#cc_icon {
  background-image: url("../assets/img/chooser_cc.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  display: inline-block;
  filter: contrast(0%) brightness(140%);
  margin-right: 5px;
}
#by_icon {
  background-image: url("../assets/img/chooser_by.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  display: inline-block;
  filter: contrast(0%) brightness(140%);
}
@media (max-width: 960px){
}
@media (max-width: 768px){
}
@media (max-width: 640px){
  #__nuxt {
    overflow-x: hidden;
    position: relative;
  }
  img {
    width: 100%;
  }
}
@media (max-width: 480px){
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      globalItems: [
        {
          title: 'About',
          to: { name: 'index' }
        },
      ],
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.$router.currentRoute.name
      }
    }
  }
}
</script>