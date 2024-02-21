<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCatalog from "@/components/ProductItemCatalog.vue";
import {onMounted, ref} from "vue";

const catalog = ref([]);
</script>

<template>
  <section class="page">
    <div class="catalog">
      <ProductList>
        <ProductItemCatalog v-for="product in catalog" :key="product" :product="product"></ProductItemCatalog>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
</style>