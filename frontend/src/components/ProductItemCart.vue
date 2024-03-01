<script setup>
import ButtonRed from "@/components/ui/buttons/ButtonRed.vue";

import {useStore} from "vuex";
import {ref} from "vue";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault.vue";
const store = useStore();


const props = defineProps({
  product: Object
})

const isLoading = ref(false);
const emit = defineEmits(["delete"]);

const deleteToCart = () => {
  try {
    isLoading.value = true;
    emit('delete', props.product.id);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">{{ props.product.name }}</h2>
    <p class="product-info">{{ props.product.price }} руб</p>
    <p class="product-info">{{ props.product.description }}</p>
    <p class="product-info">Код товара: {{ props.product.id }}</p>
    <p class="product-info">Количество: </p>
    <div class="cart-buttons__control">
      <ButtonDefault @click="">Увеличить</ButtonDefault>
      <ButtonRed @click="">Уменьшить</ButtonRed>
    </div>
    <ButtonRed v-if="isLoading">Удаление...</ButtonRed>
    <ButtonRed v-else @click="deleteToCart">Удалить с корзины</ButtonRed>
  </div>
</template>

<style scoped>
.cart-buttons__control{
  display: flex;
  gap: 10px;
  width: 100%;
}
</style>