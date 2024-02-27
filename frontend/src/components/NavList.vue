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
      <Navitem @click="$router.push('/')">Каталог</Navitem>
      <Navitem @click="$router.push('/order')">Оформленные товары</Navitem>
      <Navitem @click="$router.push('/cart')">Корзина</Navitem>
    </nav>
    <nav class="nav-list" v-if="setToken">
      <Navitem @click="logout">Выйти</Navitem>
    </nav>
    <nav class="nav-list" v-else>
      <Navitem @click="$router.push('/authorization')">Авторизация</Navitem>
      <Navitem @click="$router.push('/registration')">Регистрация</Navitem>
    </nav>
  </section>
</template>

<style scoped>
.nav-block{
  display: flex;
  justify-content: space-between;
}

.nav-list{
  display: flex;
  gap: 10px;
}

@media screen and (max-width: 768px) {
  .nav-block {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
}
</style>