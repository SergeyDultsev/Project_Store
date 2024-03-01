<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";

import {useStore} from "vuex";
const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  product: Object
})

const addToCart = async () => {
  const token =  localStorage.getItem('token');
  if(token){
    await store.dispatch('addToCart', props.product.id);
  }else {
    router.push('/authorization');
  }
};
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
    <div class="buttons">
      <ButtonDefault @click="addToCart">Добавить в корзину</ButtonDefault>
    </div>
  </div>
</template>

<style scoped>
</style>