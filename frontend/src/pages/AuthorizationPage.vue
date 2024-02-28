<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import { computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useStore } from 'vuex';
const store = useStore();

const error = computed(() => store.getters.setError);

const userlogin = {
  email: "",
  password: ""
}

async function login() {
  try {
    await store.dispatch('login', userlogin);
    router.push('/');
  } catch (error) {
    console.error('Error during login:', error);
  }
}
</script>

<template>
  <section class="page">
    <div class="authorization">
      <h2 class="page__tilte">Авторизация</h2>
      <form class="form" @submit.prevent="login" v-if="!error">
        <input class="input-default" type="text" placeholder="Введите логин" v-model="userlogin.email"/>
        <input class="input-default" type="password" placeholder="Введите пароль" v-model="userlogin.password"/>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <form class="form" @submit.prevent="login" v-else>
        <input class="input-error" type="text" placeholder="Введите логин" v-model="userlogin.email"/>
        <input class="input-error" type="password" placeholder="Введите пароль" v-model="userlogin.password"/>
        <p class="error" v-if="error">{{ error }}</p>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <a href="#" @click="$router.push('/registration')">Создать аккаунт</a>
      <a href="#" @click="$router.push('/')">На главную страницу</a>
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