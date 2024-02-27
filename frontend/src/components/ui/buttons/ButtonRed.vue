<script setup>

</script>

<template>
  <button class="btn-default">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-default{
  padding: 8px 6px;
  border: 2px solid var(--main-red-color);
  color: #FFFFFF;
  background: var(--main-red-color);
  border-radius: 10px;
  width: 100%;
}
.btn-default:hover{
  transition: all .3s;
  background: #FFFFFF;
  border: 2px solid var(--main-red-color);
  color: var(--main-red-color);
}
</style>