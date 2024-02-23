<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import { computed } from "vue";
import axios from 'axios';
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
  } catch (error) {
    console.error('Error during login:', error);
  }
}
</script>

<template>
  <section class="page">
    <div class="authorization">
      <h2 class="page__tilte">Авторизация</h2>
      <form class="form" @submit.prevent="login">
        <input type="text" placeholder="Введите логин" v-model="userlogin.email"/>
        <input type="password" placeholder="Введите пароль" v-model="userlogin.password"/>
        <p class="error" v-if="error">{{ error }}</p>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <a href="#" @click="$router.push('/registration')">Создать аккаунт?</a>
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