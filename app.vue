<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useFavicon('/svg/logo.svg');
useSeoMeta({
  title: 'Kerala Developers',
  description: 'Community of developers in Kerala',
});
</script>
