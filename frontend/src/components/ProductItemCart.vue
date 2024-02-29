<script setup>
import ButtonRed from "@/components/ui/buttons/ButtonRed.vue";

import {useStore} from "vuex";
import {computed, ref} from "vue";
const store = useStore();


const props = defineProps({
  product: Object
})

const isLoading = ref(false);

const error = computed(() => store.getters.setErrorCart);
const deleteToCart = async () => {
  try {
    isLoading.value = true;
    await store.dispatch("deleteToCart", props.product.id);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
    <ButtonRed v-if="isLoading">Удалить с корзины</ButtonRed>
    <ButtonRed v-else @click="deleteToCart">Удалить с корзины</ButtonRed>
  </div>
</template>

<style scoped>
</style>