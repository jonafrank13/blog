import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import config from '../config/config'

Vue.use(VueRouter)

export default function () {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    // Update app title on page change
    document.title = to.name ? to.name + ' | ' + config.app_name : config.app_name
    next()
  })

  return Router
}
