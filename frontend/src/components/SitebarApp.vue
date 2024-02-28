<script setup>
import NavList from "@/components/NavList.vue";
</script>

<template>
  <aside class="sitebar">
    <NavList></NavList>
  </aside>
</template>

<style scoped>
.sitebar{
  position: sticky;
  top: 0;
  left: 0;
  width: 360px;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  padding: 60px 0;
}

@media screen and (max-width: 768px) {
  .sitebar{
    bottom: 0;
    width: 100%;
    height: 60px;
    padding: 20px 20px;
  }
}
</style>