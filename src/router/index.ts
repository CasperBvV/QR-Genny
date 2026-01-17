import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Content',
      component: () => import('../views/ContentView.vue'),
    },
    {
      path: '/colour',
      name: 'Colour',
      component: () => import('../views/ColourView.vue'),
    },
    {
      path: '/style',
      name: 'Style',
      component: () => import('../views/StyleView.vue'),
    },
    {
      path: '/frame',
      name: 'Frame',
      component: () => import('../views/FrameView.vue'),
    },
    {
      path: '/icon',
      name: 'Icon',
      component: () => import('../views/IconView.vue'),
    },
    {
      path: '/advanced',
      name: 'Advanced Options',
      component: () => import('../views/AdvancedOptionsView.vue'),
    },
  ],
})

export default router
