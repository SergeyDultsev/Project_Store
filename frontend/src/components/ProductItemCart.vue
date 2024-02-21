<script setup>
const props = defineProps({
  product: Object
})

console.log(props.product)
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }}</p>
    <p class="product-info">{{ props.product.description }}</p>
  </div>
</template>

<style scoped>
.product-item{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  width:100%;
}
</style>