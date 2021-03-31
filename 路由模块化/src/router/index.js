import Vue from 'vue'
import VueRouter from 'vue-router'
import my from '../views/route/my.vue'
import yo from '../views/route/yo.vue'
import rou from '@/views/route/shou/router.js'
import hrou from '@/views/route/hide/router.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/my'
  },
  {
    path: '/my',
    name: 'my',
    component: my,
    redirect: '/my/home',
    children: [
      ...rou
    ]

  },
  {
    path: '/index',
    name: 'yo',
    component: yo,
    redirect: '/index/signin',
    children: [
      ...hrou
    ]

  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
