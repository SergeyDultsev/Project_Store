<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";
import ModalDefault from "@/components/ui/modals/ModalDefault.vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import SitebarApp from "@/components/SitebarApp.vue";

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
  <SitebarApp></SitebarApp>
  <section class="page">
    <ModalDefault v-if="cart === []">
      <h2 class="banner-title__message">Нету товаров в корзине</h2>
      <p class="banner-description__message">Вы ещё не добавляли товары в корзину</p>
      <ButtonDefault @click="$router.push('/')">Посмотреть каталог</ButtonDefault>
    </ModalDefault>
    <div class="card-content" v-else>
      <section class="cart-info">
        <ButtonDefault>Оформить товары</ButtonDefault>
      </section>
      <ProductList>
        <ProductItemCart v-for="product in cart.data" :key="product.id" :product="product"></ProductItemCart>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
.card-content{
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
}

.cart-info{
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 0 auto;
  width: 920px;
}
</style>