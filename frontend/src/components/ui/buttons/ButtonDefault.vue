<script setup>

</script>

<template>
  <button class="btn-default">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-default{
  padding: 8px 10px;
  border: 2px solid var(--main-blue-color);
  color: #FFFFFF;
  background: var(--main-blue-color);
  border-radius: 10px;
}
.btn-default:hover{
  transition: all .3s;
  background: #FFFFFF;
  border: 2px solid var(--main-blue-color);
  color: var(--main-blue-color);
}
</style>