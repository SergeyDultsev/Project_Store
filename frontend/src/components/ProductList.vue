<script setup>
import ProductItem from "@/components/ProductItem.vue";
</script>

<template>
  <section class="product-list">
    <ProductItem></ProductItem>
  </section>
</template>

<style scoped>
.product-list{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>