<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";
</script>

<template>
  <section class="page">
    <ProductList>
      <ProductItemCart v-for="product in cart" :key="product" :product="product"></ProductItemCart>
    </ProductList>
  </section>
</template>

<style scoped>

</style>