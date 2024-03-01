<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  product: Object
});

const orderProducts = ref([]);

async function getOrderProduct() {
  await store.dispatch('getProductsCatalog');
  const orders = store.getters.getCatalog;

  for (const productCatalog of orders) {
    for (const productOrder of props.product.products) {
      if (productOrder === productCatalog.id) {
        orderProducts.value.push(productCatalog);
        break;
      }
    }
  }
}

onMounted(() =>{
  getOrderProduct()
})
</script>

<template>
  <div class="order-item">
    <h2>Заказ №{{ props.product.id }}</h2>
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">Общая цена заказа: {{ props.product.order_price }} руб</p>
    <div class="product-orders" v-for="order in orderProducts" :key="order.id">
      <div class="product-orders__list">
        <h2 class="product-name">{{ order.name }}</h2>
        <p class="product-info">{{ order.price }} руб</p>
        <p class="product-info">{{ order.description }}</p>
        <p class="product-info">Код товара: {{ order.id }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-item{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  width:100%;
  align-self: flex-start;
}

.product-orders__list{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>