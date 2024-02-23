<script setup>

</script>

<template>
  <section class="product-list">
    <slot></slot>
  </section>
</template>

<style scoped>
.product-list{
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
</style>