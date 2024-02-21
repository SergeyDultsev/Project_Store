<script setup>

</script>

<template>
  <a href="#" class="nav-item">
    <slot></slot>
  </a>
</template>

<style scoped>
.nav-item{
  color: var(--main-grey-color);
  font-weight: bold;
}

.nav-item:hover{
  transition: all .3s;
  color: var(--main-blue-color);
}
</style>