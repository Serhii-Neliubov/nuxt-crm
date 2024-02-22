<template>
  <div class="wrapper">
    <img src="/loader.svg" alt="loader">
  </div>
</template>

<script lang="ts" setup>
  console.log('Loaded');
</script>

<style lang="scss" scoped>
  .wrapper{
    @apply bg-sidebar flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-50;
  }
</style>