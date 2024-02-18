import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from "@/pages/CatalogPage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
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
      path: '/basket',
      name: 'basket',
      component: BasketPage
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
