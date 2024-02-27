<script setup>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";

import {computed} from "vue";

import {useStore} from "vuex";
const store = useStore();

const props = defineProps({
  product: Object
})

const error = store.getters.setErrorCart;
const successMessage = computed(() => store.state.successMessage);

const addToCart = async () => {
  try {
    await store.dispatch('addToCart', props.product.id);
  } catch (error) {
    if (error.response) {
      console.error('Response status:', error.response.status);
    }
  }
};
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
    <p class="success">{{ successMessage }}</p>
    <p class="error">{{ error }}</p>
    <div class="buttons">
      <ButtonDefault @click="addToCart">Добавить в корзину</ButtonDefault>
    </div>
  </div>
</template>

<style scoped>
</style>