<script setup>

</script>

<template>
  <section class="page">
    <div class="registartion">
      <h2 class="page__tilte">Регистраиция</h2>
      <form class="form">
        <input type="text" placeholder="Введите логин"/>
        <input type="password" placeholder="Введите пароль"/>
        <button type="submit">Зарегистрироваться</button>
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
  max-width: 600px;
  height: 700px;
  background: #FFFFFF;
  margin: 0 auto;
  padding: 20px;
}
</style>