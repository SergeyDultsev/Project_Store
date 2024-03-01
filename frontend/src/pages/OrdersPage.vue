<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const order = ref([]);

onMounted(async () => {
  await store.dispatch('getOrder');
  order.value = store.getters.getOrder;
});
</script>

<template>
  <SitebarApp></SitebarApp>
  <section class="page">
    <ProductList>
      <ProductItemOrder v-for="product in order" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
  </section>
</template>

<style scoped>
</style>