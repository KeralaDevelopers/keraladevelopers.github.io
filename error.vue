<template>
  <div class="prose max-w-none">
    <div>{{ error.statusCode }} {{ error.message }}</div>
    <div v-if="error.stack" v-html="error.stack" />
    <a href="/">Go back home</a>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
  },
});
</script>
