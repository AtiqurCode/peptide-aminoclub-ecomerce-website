<script setup lang="ts">
const q = defineModel<string>('q', { required: true })
const sort = defineModel<string>('sort', { required: true })

const sortOptions = ['Most popular', 'Price: low to high', 'Price: high to low', 'Purity']
</script>

<template>
  <div class="flex flex-col gap-2.5 sm:flex-row sm:items-center">
    <UInput
      v-model="q"
      icon="i-lucide-search"
      placeholder="Search compound or lot"
      size="lg"
      class="w-full sm:w-70"
    />
    <USelect
      v-model="sort"
      :items="sortOptions"
      size="lg"
      class="w-full sm:w-48"
    />
  </div>
</template>
