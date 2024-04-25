<script setup>
import ProductList from "@/components/ProductList.vue";
import ProductItemCart from "@/components/ProductItemCart.vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
import SitebarApp from "@/components/SitebarApp.vue";
import MessageApp from "@/components/MessageApp.vue";

import {onMounted, ref} from "vue";
import {addToCart, deleteFromCart, getProductsCart} from "@/api/getCard.js";

const cart = ref([]);
const quantityProduct = ref(null);
const totalPrice = ref(null);

const renderCart = async () => {
  try {
    const cartData = await getProductsCart();
    cart.value = cartData;
    quantityProduct.value = cartData.length;
    totalPrice.value = cartData.reduce((total, product) => total + product.price, 0);
  } catch (error) {
    console.error("Error rendering cart:", error);
  }
};

const deleteFromCart = async (productId) => {
  try {
    await deleteFromCart(productId);
    await renderCart();
  } catch (error) {
    console.error("Error deleting product from cart:", error);
  }
};

const addToOrder = async (productId) => {
  try {
    await addToCart(productId);
  } catch (error) {
    console.error("Error adding to order:", error);
  }
};

onMounted(async () => {
  await renderCart();
});
</script>


<template>
  <SitebarApp></SitebarApp>
  <section class="page">
    <MessageApp v-if="cart.length === 0">
      <h2 class="message-title">Вы не добавили ничего в корзину</h2>
      <a class="message-link" @click="$router.push('/')">
        Посмотреть каталог
      </a>
    </MessageApp>
    <div class="card-content" v-else>
      <section class="cart-info">
        <p class="product-info">Количество товаров:{{ quantityProduct }} </p>
        <p class="product-info">К оплате:{{ totalPrice }} </p>
        <ButtonDefault @click="addToOrder">Оформить товары</ButtonDefault>
      </section>
      <ProductList>
        <ProductItemCart v-for="product in cart" :key="product.id" :product="product" @delete="deleteFromCart"></ProductItemCart>
      </ProductList>
    </div>
  </section>
</template>

<style scoped>
.card-content {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.cart-info {
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