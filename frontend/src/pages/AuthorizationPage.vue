<script setup>

</script>

<template>
  <section class="page">
    <div class="authorization">
      <h2 class="page__tilte">Авторизация</h2>
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
  border-radius: 10px;
  max-width: 600px;
  height: 700px;
  background: #FFFFFF;
  margin: 0 auto;
  padding: 20px;
}
</style>