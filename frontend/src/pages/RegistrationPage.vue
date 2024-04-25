<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import {registerUser} from "@/api/registration.js";

const registrationError = null;

const userRegister = {
  fio: null,
  email: null,
  password: null,
}

async function register() {
  try {
    await registerUser(userRegister.value);
    registrationError.value = null;
  } catch (error) {
    registrationError.value = error.message;
  }
}
</script>

<template>
  <section class="page">
    <div class="registartion">
      <h2 class="page__tilte">Регистраиция</h2>
      <form class="form" @submit.prevent="register" v-if="!registrationError">
        <input class="input-default" type="text" placeholder="Введите ФИО" v-model="userRegister.fio" required/>
        <input class="input-default" type="text" placeholder="Введите логин" v-model="userRegister.email" required/>
        <input class="input-default" type="password" placeholder="Введите пароль" v-model="userRegister.password" required/>
        <ButtonDefault type="submit">Зарегистрироваться</ButtonDefault>
      </form>
      <form class="form" @submit.prevent="register" v-else>
        <input class="input-error" type="text" placeholder="Введите ФИО" v-model="userRegister.fio" required/>
        <input class="input-error" type="text" placeholder="Введите логин" v-model="userRegister.email" required/>
        <input class="input-error" type="password" placeholder="Введите пароль" v-model="userRegister.password" required/>
        <p class="error">{{ registrationError }}</p>
        <ButtonDefault type="submit">Зарегистрироваться</ButtonDefault>
      </form>
      <a href="#" @click="$router.push('/authorization')">У вас уже есть аккаунт?</a>
      <a href="#" @click="$router.push('/')">На главную страницу</a>
    </div>
  </section>
</template>

<style scoped>
.registartion{
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
<style scoped>
.registartion{
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