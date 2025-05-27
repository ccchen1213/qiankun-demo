import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun'
import Home from '../views/Home.vue' // 👈 这里现在就有了

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue/' : '/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
})

export default router
