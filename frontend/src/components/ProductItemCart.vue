<script setup>
import ButtonRed from "@/components/ui/buttons/ButtonRed.vue";

import {useStore} from "vuex";
import {computed, ref} from "vue";
const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();


const props = defineProps({
  product: Object
})

const isLoading = ref(false);

const error = computed(() => store.getters.setErrorCart);

const emit = defineEmits(["delete"]);

const deleteToCart = () => {
  try {
    isLoading.value = true;
    emit('delete', props.product.id);
    isLoading.value = false;
    router.push('/');
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
    <ButtonRed v-if="isLoading">Удаление...</ButtonRed>
    <ButtonRed v-else @click="deleteToCart">Удалить с корзины</ButtonRed>
  </div>
</template>

<style scoped>
</style>