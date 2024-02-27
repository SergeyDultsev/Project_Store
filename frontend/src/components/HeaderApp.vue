<script setup>
import NavList from "@/components/NavList.vue";
</script>

<template>
  <header class="header">
    <NavList></NavList>
  </header>
</template>

<style scoped>
.header{
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(245, 245, 245, 0.80);
  padding: 20px 0;
}

@media screen and (max-width: 1230px) {
  .header{
    padding: 20px 20px;
  }
}
</style>