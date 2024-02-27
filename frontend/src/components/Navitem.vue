<script setup>

</script>

<template>
  <a href="#" class="nav-item">
    <slot></slot>
  </a>
</template>

<style scoped>
.nav-item{
  text-align: center;
  color: var(--main-grey-color);
  font-weight: bold;
}

.nav-item:hover{
  transition: all .3s;
  color: var(--main-blue-color);
}

@media screen and (max-width: 768px) {
  .nav-item{
    font-size: 16px;
  }
}

@media screen and (max-width: 320px) {
  .nav-item{
    font-size: 14px;
  }
}
</style>