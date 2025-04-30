import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/scroll-view',
      name: 'scrollView',
      component: () => import('../views/ScrollView/index.vue'),
    },
    {
      path: '/stretch-view',
      name: 'stretchView',
      component: () => import('../views/StretchView/index.vue'),
    },
  ],
})

export default router
