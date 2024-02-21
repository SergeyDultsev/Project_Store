<script setup>
import Navitem from "@/components/Navitem.vue";
</script>

<template>
  <section class="nav-block">
    <nav class="nav-list">
      <Navitem @click="$router.push('/')">Каталог</Navitem>
      <Navitem @click="$router.push('/order')">Оформленные товары</Navitem>
      <Navitem @click="$router.push('/cart')">Корзина</Navitem>
    </nav>
    <nav class="nav-list">
      <Navitem @click="$router.push('/authorization')">Авторизация</Navitem>
      <Navitem @click="$router.push('/registration')">Регистариция</Navitem>
      <Navitem @click="$router.push('/')">Выход</Navitem>
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
</style>