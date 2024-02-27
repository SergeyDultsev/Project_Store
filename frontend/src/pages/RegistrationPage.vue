<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";

import {computed} from "vue";

import {useStore} from "vuex";
import InputDefault from "@/components/ui/inputs/InputDefault.vue";
import InputError from "@/components/ui/inputs/InputError.vue";
const store = useStore()

const error = computed(() => store.getters.setError);

const userRegister = {
  fio: null,
  email: null,
  password: null,
}

async function register() {
  await store.dispatch("register", userRegister);
}
</script>

<template>
  <section class="page">
    <div class="registartion">
      <h2 class="page__tilte">Регистраиция</h2>
      <form class="form" @submit.prevent="register" v-if="!error">
        <InputDefault type="text" placeholder="Введите ФИО" v-model="userRegister.fio" required/>
        <InputDefault type="text" placeholder="Введите логин" v-model="userRegister.email" required/>
        <InputDefault type="password" placeholder="Введите пароль" v-model="userRegister.password" required/>
        <ButtonDefault type="submit">Зарегистрироваться</ButtonDefault>
      </form>
      <form class="form" @submit.prevent="register" v-else>
        <InputError type="text" placeholder="Введите ФИО" v-model="userRegister.fio" required/>
        <InputError type="text" placeholder="Введите логин" v-model="userRegister.email" required/>
        <InputError type="password" placeholder="Введите пароль" v-model="userRegister.password" required/>
        <p class="error">{{ error }}</p>
        <ButtonDefault type="submit">Зарегистрироваться</ButtonDefault>
      </form>
      <a href="#" @click="$router.push('/authorization')">У вас уже есть аккаунт?</a>
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