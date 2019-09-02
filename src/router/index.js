import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/pages/Landing')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const suffix = require('../../config/prod.env').APP_NAME
  document.title = to.name + (suffix ? ` - ${suffix}` : '')
  next()
})

export default router
