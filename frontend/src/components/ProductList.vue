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
  gap: 10px;
  flex-wrap: wrap;
}
</style>