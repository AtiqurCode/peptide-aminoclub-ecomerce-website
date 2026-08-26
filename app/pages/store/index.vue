<script setup lang="ts">
import { catalog, matchesCategory } from '~/data/catalog'

useSeoMeta({
  title: 'All products — Amino Club',
  description: 'The full research peptide catalog. Every card shows its purity, its certificate, and the lot you will actually receive.'
})

const category = ref('All')
const q = ref('')
const sort = ref('Most popular')
const filtersOpen = ref(false)

const filtered = computed(() => {
  let list = catalog.filter((p) => {
    const matchesQuery = q.value === ''
      || `${p.name} ${p.lot}`.toLowerCase().includes(q.value.toLowerCase())
    return matchesCategory(p, category.value) && matchesQuery
  })
  if (sort.value === 'Price: low to high') list = [...list].sort((a, b) => a.basePrice - b.basePrice)
  if (sort.value === 'Price: high to low') list = [...list].sort((a, b) => b.basePrice - a.basePrice)
  if (sort.value === 'Purity') list = [...list].sort((a, b) => Number.parseFloat(b.purity) - Number.parseFloat(a.purity))
  return list
})
</script>

<template>
  <div class="mx-auto max-w-(--ui-container) px-4 py-9 sm:px-6 lg:px-8 lg:pb-20">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <SectionEyebrow>Catalog · research use only</SectionEyebrow>
        <h1 class="mt-2.5 text-[30px] font-semibold tracking-tight text-ink sm:text-[36px] lg:text-[40px]">
          All <span class="font-serif font-normal italic">products</span>
        </h1>
      </div>
      <div class="flex items-center gap-2.5">
        <UButton
          icon="i-lucide-sliders-horizontal"
          color="neutral"
          variant="outline"
          class="lg:hidden"
          @click="filtersOpen = true"
        >
          Filters
        </UButton>
        <CatalogToolbar
          v-model:q="q"
          v-model:sort="sort"
        />
      </div>
    </div>

    <div class="mt-5.5 grid grid-cols-1 items-start gap-7 lg:grid-cols-[236px_1fr]">
      <aside class="sticky top-[86px] hidden lg:block">
        <CatalogSidebar v-model="category" />
      </aside>

      <div>
        <p class="mb-3.5 text-[13px] text-label">
          {{ filtered.length }} compounds · dose selectable in card
        </p>
        <div
          v-if="filtered.length"
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <ProductCard
            v-for="p in filtered"
            :key="p.id"
            :product="p"
          />
        </div>
        <div
          v-else
          class="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line py-20 text-center"
        >
          <UIcon
            name="i-lucide-search-x"
            class="size-8 text-label"
          />
          <p class="text-[15px] font-semibold">
            No compounds match your search
          </p>
          <p class="max-w-[320px] text-[13px] text-body">
            Try a different compound name, lot number, or clear the category filter.
          </p>
          <UButton
            color="neutral"
            variant="outline"
            size="sm"
            @click="category = 'All'; q = ''"
          >
            Clear filters
          </UButton>
        </div>
      </div>
    </div>

    <USlideover
      v-model:open="filtersOpen"
      side="left"
      title="Filters"
    >
      <template #body>
        <CatalogSidebar v-model="category" />
      </template>
    </USlideover>
  </div>
</template>
