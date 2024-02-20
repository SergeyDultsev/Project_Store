<script setup>
import Navitem from "@/components/Navitem.vue";
</script>

<template>
  <div class="nav-block">
    <nav class="nav-list">
      <Navitem @click="$router.push('/')">Каталог</Navitem>
      <Navitem @click="$router.push('/order')">Оформленные товары</Navitem>
      <Navitem @click="$router.push('/basket')">Корзина</Navitem>
    </nav>
    <nav class="nav-list">
      <Navitem @click="$router.push('/authorization')">Авторизация</Navitem>
      <Navitem @click="$router.push('/registration')">Регистариция</Navitem>
    </nav>
  </div>
</template>

<style scoped>
.nav-block{
  display: flex;
  justify-content: space-between;
}

.nav-list{
  display: flex;
  gap: 6px;
}
</style>