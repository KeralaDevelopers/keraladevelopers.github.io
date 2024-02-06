<template>
  <header class="p-4 sm:px-8">
    <div class="flex items-center justify-between">
      <a href="/">
        <Logo class="size-5" />
      </a>
      <div class="space-x-2">
        <span v-for="link in links" :key="link.url">
          <a :href="link.url">
            <UButton
              variant="ghost"
              :label="link.label"
              :disabled="link.url === $route.path"
            />
          </a>
        </span>
        <span v-if="$route.path != '/'">
          <a href="/telegram" target="_blank">
            <UButton variant="solid" label="Join us">
              <template #trailing>
                <Icon name="lucide:arrow-right" />
              </template>
            </UButton>
          </a>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Blog', url: '/blog' },
  { label: 'Events', url: '/events' },
];
</script>
