<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const cart = ref([]);

onMounted(async () => {
  await store.dispatch('getProductsCart');
  cart.value = store.getters.getCatalog;
  console.log(cart);
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