<script setup>

</script>

<template>
  <a href="#" class="nav-item">
    <slot></slot>
  </a>
</template>

<style scoped>
.nav-item{
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 18px 30px;
}

.nav-item:hover{
  color: var(--main-blue-color);
  background: rgba(255, 255, 255, 1);
}
</style>