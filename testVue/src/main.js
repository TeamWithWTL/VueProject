// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Mock from 'mockjs'
import Home from './Home'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueRouter)
Vue.prototype.$axios = Axios//  引入Axios不能使用Vue.use
Vue.use(Mock)

const routes = [
  {
    path: '/Hmoe',
    name: 'Home',
    component: Home
  }
]
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
