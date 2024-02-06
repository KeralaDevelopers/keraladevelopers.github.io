<template>
  <main class="m-auto max-w-prose">
    <ContentDoc v-slot="{ doc }">
      <UBreadcrumb
        divider="/"
        :links="[{ label: 'Home', to: '/' }, { label: doc.title }]"
        class="mb-4"
      />
      <div class="prose prose-slate dark:prose-invert prose-pre:bg-slate-100">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>
