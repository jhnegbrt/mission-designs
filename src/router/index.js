import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Splash',
    meta: { transition: "fade" },
    component: () => import(/* webpackChunkName: "splash" */ '../views/Splash.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: { transition: "fade" },

    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/philosophy',
    name: 'Philosophy',
    meta: { transition: "none" },
    component: () => import(/* webpackChunkName: "about" */ '../views/Philosophy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  to.meta.transitionName = from.fullPath === '/' ? 'fade' : 'none'
})

export default router
