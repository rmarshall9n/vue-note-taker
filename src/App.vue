<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <div class="content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppNav from './components/AppNav'
  import AppFooter from './components/AppFooter'

  export default {

    name: 'app',

    components: {
      'app-header': AppHeader,
      'app-nav': AppNav,
      'app-footer': AppFooter,
    },

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
  }

  body {
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: tomato;
  }
</style>
