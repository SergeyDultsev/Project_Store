<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";

import axios from "axios";
import {onMounted, ref} from "vue";

const cart = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
    cart.value = response.data;
    console.log(cart.value)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<template>
  <section class="page">
    <ProductList>
      <ProductItemCart v-for="product in cart.data" :key="product.id" :product="product"></ProductItemCart>
    </ProductList>
  </section>
</template>

<style scoped>

</style>