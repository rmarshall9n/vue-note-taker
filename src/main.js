import Vue from 'vue'
import VueConfig from 'vue-config'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Config from '../env.js'
import Routes from './routes/routes'

import App from './App.vue'


Vue.use(VueConfig, Config);
Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
