import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                      name: 'home',                     component: () => import('../views/HomeView.vue') },
    { path: '/contact',               name: 'contact',                  component: () => import('../views/ContactView.vue') },
    { path: '/ciluzio',               name: 'ciluzio',                  component: () => import('../views/CiluzioView.vue') },
    { path: '/inspirations',          name: 'inspirations',             component: () => import('../views/InspirationView.vue') },
    { path: '/panier',                name: 'panier',                   component: () => import('../views/CartView.vue') },
    { path: '/compte',                name: 'compte',                   component: () => import('../views/AccountView.vue') },
    { path: '/confirmation',          name: 'cart-order-thank-you',     component: () => import('../views/ThankYouOrder.vue') },
    { path: '/:pathMatch(.*)*',       name: 'page-introuvable',         component: () => import('../views/NotFindView.vue') },
  ]
})

export default router
