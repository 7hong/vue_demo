import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'
import createRouter from './config/router'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter);

const router = createRouter();
new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
