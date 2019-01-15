// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Home from './Home'
import Home1 from './Homev1.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueRouter)
Vue.prototype.$axios = Axios//  引入Axios不能使用Vue.use

const routes = [
  {
    path: '/Hmoe',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home1',
    name: 'Home1',
    component: Home1
  }
]
const router = new VueRouter({
  routes
})
router.push({ path: '/Home1' })
/* eslint-disable no-new */
new Vue({
  router
}).$mount("#app")
