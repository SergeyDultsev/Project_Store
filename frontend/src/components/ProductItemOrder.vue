<script setup>
const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="product-item">
    <h2>Заказ №{{ props.product.id }}</h2>
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">Общая цена заказа: {{ props.product.order_price }} руб</p>
  </div>
</template>

<style scoped>
</style>