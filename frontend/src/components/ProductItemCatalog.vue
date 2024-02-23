<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";

const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <div class="buttons">
      <ButtonDefault>Добавить в корзину</ButtonDefault>
    </div>
  </div>
</template>

<style scoped>
</style>