import Vue from 'vue'
import Router from 'vue-router'

// 首页
import thome from '../components/home/home'
// 首页二级路由
import feature from '../components/home/feature/featureMainPage'
import review from '../components/home/review/review'
import selectMovie from '../components/home/selectMovie/selectMovie'
import advance from '../components/home/advance/advance'

// 购票
import byTicket from '../components/byTicket/index'
// 购票二级路由
import cinema from '../components/byTicket/cinemas'
import movies from '../components/byTicket/movies/movies.vue'
// 购票三级路由
import onShow from '../components/byTicket/movies/onShow'
import aboutShow from '../components/byTicket/movies/aboutShow'

// 我的
import mine from '../components/mine/index'
import movieDetails from '../components/home/movieDetails'
import login from '../components/mine/login'
import register from '../components/mine/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/thome'
    },
    {
      path: '/thome',
      name: 'thome',
      component: thome,
      redirect: '/thome/feature',
      children: [{
          path: '/thome/feature',
          name: 'feature',
          component: feature
        },

        {
          path: '/thome/review',
          name: 'review',
          component: review
        },
        {
          path: '/thome/selectMovie',
          name: 'selectMovie',
          component: selectMovie
        },
        {
          path: '/thome/advance',
          name: 'advance',
          component: advance
        },
      ]
    },
    // 购票路由 
    {
      path: '/byTicket',
      name: 'byTicket',
      redirect: '/byTicket/movies',
      component: byTicket,
      children: [{
          path: '/byTicket/movies',
          name: 'movies',
          component: movies,
          redirect: '/byTicket/movies/onShow',
          children: [{
              path: '/byTicket/movies/onShow',
              name: 'onShow',
              component: onShow
            },
            {
              path: '/byTicket/movies/aboutShow',
              name: 'aboutShow',
              component: aboutShow
            },
          ]
        },

        {
          path: '/byTicket/cinema',
          name: 'cinema',
          component: cinema
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/movieDetails',
      name: 'movieDetails',
      component: movieDetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
