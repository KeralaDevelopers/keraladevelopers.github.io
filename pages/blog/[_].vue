<template>
  <main class="m-auto max-w-prose">
    <ContentDoc v-slot="{ doc }">
      <UBreadcrumb
        divider="/"
        :links="[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: doc.title },
        ]"
        class="mb-4"
      />
      <div class="prose prose-slate dark:prose-invert prose-pre:bg-slate-100">
        <h1>{{ doc.title }}</h1>
        <div v-if="users[doc.author]" class="flex items-center gap-2">
          <UAvatar
            :src="users[doc.author].image"
            :alt="users[doc.author].name"
          />
          <span class="font-medium">{{ users[doc.author].name }}</span>
          <span>&mdash;</span>
          <span>{{ doc.readingTime.text }}</span>
        </div>
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
import users from '@/users';
</script>
