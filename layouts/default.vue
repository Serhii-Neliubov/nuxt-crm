<template>
  <section class="grid">
    <LayoutSidebar />
    <div>
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
  console.log('Loaded');
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>