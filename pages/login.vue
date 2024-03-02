<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-[#151138] w-[1/4] p-5">
      <h1 class="text-2xl font-bold mb-5 text-center">Login</h1>

      <form>
        <UiInput v-model="email" placeholder="Email" type="email" class="mb-3" />
        <UiInput v-model="password" placeholder="Password" type="password" class="mb-3" />
        <UiInput v-model="name" placeholder="Name" type="text" class="mb-3" />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button">Login</UiButton>
          <UiButton type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useIsLoadingStore} from "~/store/auth.store";

  useHead({
    title: 'Login',
  })

  const email = ref('');
  const password = ref('');
  const name = ref('');

  const isLoadingStore = useIsLoadingStore();
  const router = useRouter();
</script>

<style lang="scss" scoped>

</style>