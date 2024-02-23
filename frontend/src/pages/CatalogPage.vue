<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCatalog from "@/components/ProductItemCatalog.vue";

import {onMounted, ref} from "vue";
import axios from "axios";

const catalog = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    catalog.value = response.data;
    console.log(catalog)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<template>
  <section class="page">
    <div class="catalog">
      <ProductList>
        <ProductItemCatalog v-for="product in catalog.data" :key="product.id" :product="product"></ProductItemCatalog>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
</style>