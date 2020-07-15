import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/sys/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
