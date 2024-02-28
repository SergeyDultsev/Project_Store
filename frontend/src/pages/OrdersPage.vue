<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";
import ModalDefault from "@/components/ui/modals/ModalDefault.vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const order = ref([]);

onMounted(async () => {
  await store.dispatch('getProductsOrder');
  order.value = store.getters.getOrder;
});
</script>

<template>
  <SitebarApp></SitebarApp>
  <section class="page">
    <ProductList v-if="order < 0">
      <ProductItemOrder v-for="product in order.data" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
    <ModalDefault v-else>
      <h2 class="banner-title__message">Нету купленных товаров</h2>
      <p class="banner-description__message">Вы ещё не покупали товар</p>
      <ButtonDefault @click="$router.push('/')">Посмотреть каталог</ButtonDefault>
    </ModalDefault>
  </section>
</template>

<style scoped>
</style>