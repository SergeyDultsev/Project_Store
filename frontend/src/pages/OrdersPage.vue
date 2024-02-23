<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";

import {onMounted, ref} from "vue";
import axios from "axios";

const orders = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`);
    orders.value = response.data;
    console.log(orders)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<template>
  <section class="page">
    <ProductList>
      <ProductItemOrder v-for="product in orders.data" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
  </section>
</template>

<style scoped>
</style>