<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCatalog from "@/components/ProductItemCatalog.vue";

import {onMounted, ref} from "vue";

import {useStore} from "vuex";
const store = useStore();
const catalog = ref([]);

onMounted(async () => {
  await store.dispatch('getProducts');
  catalog.value = store.getters.getCatalog;
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