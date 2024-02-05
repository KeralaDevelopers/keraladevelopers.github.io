<template>
  <main class="flex size-full items-center">
    <div class="max-w-4xl">
      <div class="mb-4 text-6xl font-bold text-slate-800 dark:text-slate-200">
        <span> Connecting developers from </span>
        <span class="text-brand-700 dark:text-brand-200">Kerala</span>
      </div>
      <div class="mb-4 text-xl font-medium text-slate-700 dark:text-slate-300">
        We are a community of developers, designers, and tech enthusiasts from
        Kerala. Join us to connect, learn, and grow together, while sipping some
        tender coconut water.
      </div>
      <a href="/telegram" target="_blank">
        <UButton size="xl" variant="solid" label="Join us">
          <template #trailing>
            <Icon name="lucide:arrow-right" />
          </template>
        </UButton>
      </a>
    </div>
  </main>
</template>
