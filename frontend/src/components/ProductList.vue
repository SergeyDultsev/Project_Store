<script setup>

</script>

<template>
  <div class="product-list">
    <slot></slot>
  </div>
</template>

<style scoped>
.product-list{
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 0 20px;
}
</style>