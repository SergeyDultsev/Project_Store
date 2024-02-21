<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";
import {ref} from "vue";

const orders = ref([]);
</script>

<template>
  <section class="page">
    <ProductList>
      <ProductItemOrder v-for="product in orders" :key="product" :product="product"></ProductItemOrder>
    </ProductList>
  </section>
</template>

<style scoped>
</style>