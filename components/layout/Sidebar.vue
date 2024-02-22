<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative">
    <NuxtLink class="mb-10 block" to="/">
      <NuxtImg class="mx-auto" src="/logo.svg" alt="Logo" width="100px" />
    </NuxtLink>

    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20" />
    </button>

    <LayoutMenu />
  </aside>
</template>

<script lang="ts" setup></script>