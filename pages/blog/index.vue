<template>
  <main class="m-auto max-w-prose">
    <UBreadcrumb
      divider="/"
      :links="[
        { label: 'Home', to: '/' },
        { label: 'Blog', to: '/blog' },
      ]"
      class="mb-4"
    />
    <ContentList v-slot="{ list }" path="/blog">
      <div class="divide-y">
        <a
          v-for="doc in list"
          :key="doc._path"
          :href="doc._path"
          class="block space-y-2 py-4"
        >
          <h4 class="font-medium">{{ doc.title }}</h4>
          <p class="line-clamp-3 text-slate-800">{{ doc.description }}</p>
          <div v-if="users[doc.author]" class="flex items-center gap-2 text-sm">
            <UAvatar
              size="xs"
              :src="users[doc.author].image"
              :alt="users[doc.author].name"
            />
            <span class="font-medium">{{ users[doc.author].name }}</span>
            <span>&hybull;</span>
            <span>{{ doc.readingTime.text }}</span>
          </div>
        </a>
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import users from '@/users';
</script>
