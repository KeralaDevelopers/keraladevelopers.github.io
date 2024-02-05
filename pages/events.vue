<template>
  <main class="m-auto max-w-prose">
    <UBreadcrumb
      divider="/"
      :links="[{ label: 'Home', to: '/' }, { label: 'Events' }]"
      class="mb-4"
    />
    <ContentList
      v-slot="{ list }"
      :query="{
        path: '/events',
        where: {
          $or: [
            {
              date: {
                $gte: dayjs().format('YYYY-MM-DD'),
              },
            },
            {
              date_to: {
                $gte: dayjs().format('YYYY-MM-DD'),
              },
            },
          ],
        },
        sort: [
          {
            date: -1,
          },
        ],
      }"
    >
      <div class="divide-y">
        <div v-for="doc in list" :key="doc._path" class="space-y-2 py-4">
          <h4 class="text-lg font-medium">{{ doc.title }}</h4>
          <div class="space-x-2">
            <UBadge color="slate" size="md" variant="outline">
              <Icon name="lucide:calendar-days" />
              <span v-if="doc.date_from && doc.date_to" class="ml-1">
                {{ dayjs(doc.date_from).format('LL') }}
                -
                {{ dayjs(doc.date_to).format('LL') }}
              </span>
              <span v-else class="ml-1">
                {{ dayjs(doc.date).format('LL') }}
              </span>
            </UBadge>
            <UBadge v-if="doc.venue" color="slate" size="md" variant="outline">
              <Icon name="lucide:map" />
              <span class="ml-1">{{ doc.venue }}</span>
            </UBadge>
          </div>
          <a
            v-if="doc.register"
            class="block"
            :href="doc.register"
            target="_blank"
          >
            <UButton label="Register" variant="outline" size="sm">
              <template #trailing>
                <Icon name="lucide:arrow-right" />
              </template>
            </UButton>
          </a>
          <div class="prose prose-slate dark:prose-invert">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
</script>
