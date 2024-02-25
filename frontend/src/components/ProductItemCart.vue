<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import ButtonRed from "@/components/ui/ButtonRed.vue";

import {useStore} from "vuex";
import { computed } from "vue";
const store = useStore();


const props = defineProps({
  product: Object
})

const error = computed(() => store.getters.setErrorCart);
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
    <div class="buttons">
      <ButtonDefault>Оформить товар</ButtonDefault>
      <ButtonRed>Удалить с корзины</ButtonRed>
    </div>
  </div>
</template>

<style scoped>
</style>