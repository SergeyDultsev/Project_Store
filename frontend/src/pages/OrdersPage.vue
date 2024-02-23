<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const order = ref([]);

onMounted(async () => {
  await store.dispatch('getProducts');
  order.value = store.getters.getCatalog;
  console.log(order);
});
</script>

<template>
  <section class="page">
    <ProductList>
      <ProductItemOrder v-for="product in order.data" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
  </section>
</template>

<style scoped>
</style>