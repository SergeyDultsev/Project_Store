<script setup>
import Navitem from "@/components/Navitem.vue";

import {computed} from "vue";
import { useStore } from 'vuex';
const store = useStore();
const setToken = computed(() => store.getters.setToken);

async function logout() {
  try {
    await store.dispatch('logout');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section class="nav-block">
    <nav class="nav-list">
      <Navitem @click="$router.push('/')">
        <img class="icon" src="../assets/img/shop.png" alt="catalog">
        Каталог
      </Navitem>
      <Navitem @click="$router.push('/order')">
        <img class="icon" src="../assets/img/shopping.png" alt="shopping">
        Оформленные товары
      </Navitem>
      <Navitem @click="$router.push('/cart')">
        <img class="icon" src="../assets/img/cart.png" alt="cart">
        Корзина
      </Navitem>
    </nav>
    <nav class="nav-list" v-if="setToken">
      <Navitem @click="logout">
        <img class="icon" src="../assets/img/exit.png" alt="exit">
        Выйти
      </Navitem>
    </nav>
    <nav class="nav-list" v-else>
      <Navitem @click="$router.push('/authorization')">
        <img class="icon" src="../assets/img/exit.png" alt="exit">
        Авторизация
      </Navitem>
    </nav>
  </section>
</template>

<style scoped>
.nav-block{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.nav-list{
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .nav-block{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }

  .nav-list{
    flex-direction: row;
    gap: 20px;
  }
}
</style>