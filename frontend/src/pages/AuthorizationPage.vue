<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import { computed } from "vue";

import {useRouter} from "vue-router";
const router = useRouter();
import { useStore } from 'vuex';
import InputDefault from "@/components/ui/inputs/InputDefault.vue";
import InputError from "@/components/ui/inputs/InputError.vue";
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
        <InputDefault type="text" placeholder="Введите логин" v-model="userlogin.email"/>
        <InputDefault type="password" placeholder="Введите пароль" v-model="userlogin.password"/>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <form class="form" @submit.prevent="login" v-else>
        <InputError type="text" placeholder="Введите логин" v-model="userlogin.email"/>
        <InputError type="password" placeholder="Введите пароль" v-model="userlogin.password"/>
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