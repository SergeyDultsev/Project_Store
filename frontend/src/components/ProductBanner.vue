<script setup>

</script>

<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<style scoped>
.banner{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
}
</style>