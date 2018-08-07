import Vue from 'vue'
import Router from 'vue-router'
import thome from  '../components/home/home'
import movieDetails from '../components/home/movieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'thome',
      component: thome
    },
    {
      path: '/movieDetails',
      name: 'movieDetails',
      component: movieDetails
    }
  ]
})
