import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from "@/pages/CatalogPage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";
import CartPage from "@/pages/CartPage.vue";
import AuthorizationPage from "@/pages/AuthorizationPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/order',
      name: 'order',
      component: OrdersPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: AuthorizationPage
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationPage
    },
  ]
})

export default router
