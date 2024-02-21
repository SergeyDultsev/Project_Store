<script setup>

import ButtonDefault from "@/components/ui/ButtonDefault.vue";
</script>

<template>
  <section class="page">
    <div class="authorization">
      <h2 class="page__tilte">Авторизация</h2>
      <form class="form">
        <input type="text" placeholder="Введите логин"/>
        <input type="password" placeholder="Введите пароль"/>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <a class="" href="#" @click="$router.push('/registration')">Создать аккаунт?</a>
    </div>
  </section>
</template>

<style scoped>
.authorization{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
</style>