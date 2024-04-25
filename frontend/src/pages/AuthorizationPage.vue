<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/authorization.js';
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";

const email = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();

async function submitForm() {
  const { token, error: authError } = await login(email.value, password.value);
  if (token) {
    router.push('/');
  } else {
    error.value = authError;
  }
}
</script>

<template>
  <section class="page">
    <div class="authorization">
      <h2 class="page__tilte">Авторизация</h2>
      <form class="form" @submit.prevent="submitForm" v-if="!error">
        <input class="input-default" type="text" placeholder="Введите логин" v-model="email"/>
        <input class="input-default" type="password" placeholder="Введите пароль" v-model="password"/>
        <ButtonDefault type="submit">Авторизироваться</ButtonDefault>
      </form>
      <form class="form" @submit.prevent="submitForm" v-else>
        <input class="input-error" type="text" placeholder="Введите логин" v-model="email"/>
        <input class="input-error" type="password" placeholder="Введите пароль" v-model="password"/>
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