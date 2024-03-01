<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemOrder from "@/components/ProductItemOrder.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import MessageApp from "@/components/MessageApp.vue";
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
    <MessageApp v-if="order.length === 0">
      <h2 class="message-title">Вы ещё ничего не покупали у нас</h2>
      <a class="message-link" @click="$router.push('/')">
        Посмотреть каталог
      </a>
    </MessageApp>
    <ProductList v-else>
      <ProductItemOrder v-for="product in order" :key="product.id" :product="product"></ProductItemOrder>
    </ProductList>
  </section>
</template>

<style scoped>
</style>