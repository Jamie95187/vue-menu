import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/User/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
