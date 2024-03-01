<script setup>

</script>

<template>
  <div class="message-block">
    <slot></slot>
  </div>
</template>

<style scoped>
.message-block{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
}
</style>