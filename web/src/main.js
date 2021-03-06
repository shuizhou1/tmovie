// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './setRem'
import  'jquery'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'
import axios from 'axios'
import "../static/css/reset.css"
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
