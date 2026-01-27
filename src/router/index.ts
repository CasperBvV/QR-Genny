/**
 *   Copyright (C) 2026  Casper Buurman
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/content',
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

    {
      path: '/legal',
      name: 'Legal',
      component: () => import('../views/LegalView.vue'),
    }
  ],
})

export default router
