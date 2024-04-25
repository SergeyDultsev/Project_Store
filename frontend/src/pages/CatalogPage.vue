<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCatalog from "@/components/ProductItemCatalog.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";
import {getProductsCatalog} from "@/api/getCatalog.js";

const catalog = ref([]);

const renderCatalog = async () => {
  try {
    catalog.value = await getProductsCatalog();
  } catch (error) {
    console.error("Error rendering catalog:", error);
  }
};

onMounted(async () => {
  await renderCatalog();
});
</script>

<template>
  <SitebarApp></SitebarApp>
  <section class="page">
    <div class="catalog">
      <ProductList>
        <ProductItemCatalog v-for="product in catalog" :key="product.id" :product="product"></ProductItemCatalog>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
</style>