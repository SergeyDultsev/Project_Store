<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
</script>

<template>
  <div class="product-item">
    <h2 class="product-name">Продукт</h2>
    <p class="product-info">10 руб</p>
    <p class="product-info">Описание</p>
    <div class="buttons">
      <ButtonDefault>Добавить в корзину</ButtonDefault>
    </div>
  </div>
</template>

<style scoped>
.product-item{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  width:100%;
}
</style>