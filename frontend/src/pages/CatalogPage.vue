<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCatalog from "@/components/ProductItemCatalog.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";

import {useStore} from "vuex";
const store = useStore();

const catalog = ref([]);

onMounted(async () => {
  await store.dispatch('getProductsCatalog');
  catalog.value = store.getters.getCatalog;
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