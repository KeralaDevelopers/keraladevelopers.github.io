<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useFavicon(() =>
  usePreferredDark().value ? '/favicon/dark.svg' : '/favicon/light.svg',
);
useSeoMeta({
  title: 'Kerala Developers',
  description: 'Community of developers in Kerala',
});
</script>
