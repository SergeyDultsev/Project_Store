<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";
import ProductBanner from "@/components/ProductBanner.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
const store = useStore();

const order = ref([]);

onMounted(async () => {
  await store.dispatch('getProductsOrder');
  order.value = store.getters.getOrder;
});
</script>

<template>
  <section class="page">
    <ProductList v-if="order < 0">
      <ProductItemOrder v-for="product in order.data" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
    <ProductBanner v-else>
      <h2 class="banner-title__message">Нету купленных товаров</h2>
      <p class="banner-description__message">Вы ещё не покупали товар</p>
      <ButtonDefault @click="$router.push('/')">Посмотреть каталог</ButtonDefault>
    </ProductBanner>
  </section>
</template>

<style scoped>
</style>