<script setup>

</script>

<template>
  <a href="#" class="nav-item">
    <slot></slot>
  </a>
</template>

<style scoped>
.nav-item{
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 20px 0 20px 30px;
  color: var(--main-blue-color);
}

.nav-item:hover{
  transition: all .3s;
  background: var(--main-blue-10-transparency-color);
}

@media screen and (max-width: 768px) {
  .nav-item{
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .nav-item{
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    padding: 0;
  }

  .nav-item:hover{
    background: none;
  }
}
</style>