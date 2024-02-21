<script setup>

import ButtonDefault from "@/components/ui/ButtonDefault.vue";
</script>

<template>
  <section class="page">
    <div class="registartion">
      <h2 class="page__tilte">Регистраиция</h2>
      <form class="form">
        <input type="text" placeholder="Введите логин"/>
        <input type="password" placeholder="Введите пароль"/>
        <ButtonDefault type="submit">Зарегистрироваться</ButtonDefault>
      </form>
      <a class="" href="#" @click="$router.push('/authorization')">У вас уже есть аккаунт?</a>
    </div>
  </section>
</template>

<style scoped>
.registartion{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
</style>