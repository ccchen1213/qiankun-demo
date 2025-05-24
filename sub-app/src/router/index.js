import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub/' : '/'),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
  ],
})

export default router
