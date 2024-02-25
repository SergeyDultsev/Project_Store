<script setup>
const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
  </div>
</template>

<style scoped>
</style>