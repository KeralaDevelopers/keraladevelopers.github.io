<template>
  <main class="flex size-full items-center">
    <div class="max-w-4xl">
      <div class="mb-4 text-5xl font-bold text-slate-800 dark:text-slate-200">
        <span class="text-brand-700 dark:text-brand-200">Kerala</span>
        <span class="text-brand-500"> 🤝 </span>
        <span class="text-brand-700 dark:text-brand-200">Devs</span>
      </div>
      <div class="mb-4 text-xl font-medium text-slate-700 dark:text-slate-300">
        We are a collective of tech enthusiasts, developers, and designers
        hailing from Kerala. Come be a part of our community to forge
        connections, gain knowledge, and thrive together &mdash; all while
        enjoying refreshing sips of tender coconut water.
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
