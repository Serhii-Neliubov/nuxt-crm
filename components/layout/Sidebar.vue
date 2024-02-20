<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative">
    <NuxtLink class="mb-10 block" to="/">
      <NuxtImg class="mx-auto" src="/favicon.ico" alt="Logo" width="100px" />
    </NuxtLink>

    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20" />
    </button>
  </aside>
</template>

<script lang="ts" setup></script>