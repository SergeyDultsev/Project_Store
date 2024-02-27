<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";
import ModalDefault from "@/components/ui/modals/ModalDefault.vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const cart = ref([]);

onMounted(async () => {
  await store.dispatch('getProductsCart');
  cart.value = store.getters.getCart;
});
</script>

<template>
  <section class="page">
    <ProductList v-if="cart < 0">
      <ProductItemCart v-for="product in cart.data" :key="product.id" :product="product"></ProductItemCart>
    </ProductList>
    <ModalDefault v-else>
      <h2 class="banner-title__message">Нету товаров в корзине</h2>
      <p class="banner-description__message">Вы ещё не добавляли товары в корзину</p>
      <ButtonDefault @click="$router.push('/')">Посмотреть каталог</ButtonDefault>
    </ModalDefault>
  </section>
</template>

<style scoped>

</style>