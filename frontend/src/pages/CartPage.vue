<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import SitebarApp from "@/components/SitebarApp.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const cart = ref([]);
const quantityProduct = ref(null);

onMounted(async () => {
  await store.dispatch('getProductsCart');
  cart.value = store.getters.getCart;
  quantityProduct.value = cart.value.length;
});

const deleteFromCart = async (productId) => {
  await store.dispatch("deleteToCart", productId);
};

const addToOrder = async () => {
  try {
    await store.dispatch("addToOrder");
    await store.dispatch("getProductsCart");
    cart.value = store.getters.getCart;
    router.push('/order');
  } catch (error) {
    console.error("Error adding order:", error);
  }
};

</script>

<template>
  <SitebarApp></SitebarApp>
  <section class="page">
    <div class="card-content">
      <section class="cart-info">
        <p class="product-info">Количество товаров:{{ quantityProduct }} </p>
        <ButtonDefault @click="addToOrder">Оформить товары</ButtonDefault>
      </section>
      <ProductList>
        <ProductItemCart v-for="product in cart" :key="product.id" :product="product" @delete="deleteFromCart"></ProductItemCart>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
.card-content{
  display: flex;
  justify-content: center;
  gap: 10px;
}

.cart-info{
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  align-self: flex-start;
}
</style>