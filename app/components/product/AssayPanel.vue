<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { assayData } from '~/data/catalog'

const props = defineProps<{ product: Product }>()

const rows = assayData.map(a => ({
  n: a.n,
  v: a.n === 'Peptide Purity' ? `${props.product.purity}%` : 'Pass'
}))
</script>

<template>
  <div class="rounded-[20px] border border-line p-5">
    <div class="flex items-center justify-between">
      <p class="text-[14px] font-semibold">
        Batch documentation
      </p>
      <NuxtLink
        to="/coa"
        class="text-[12.5px] font-semibold text-ink-green"
      >
        View certificate →
      </NuxtLink>
    </div>
    <div class="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
      <div
        v-for="r in rows"
        :key="r.n"
        class="rounded-xl bg-surface px-3 py-2.5"
      >
        <p class="text-[11.5px] font-semibold">
          {{ r.n }}
        </p>
        <p class="mt-1 font-mono text-[10px] text-green-600">
          {{ r.v }}
        </p>
      </div>
    </div>
  </div>
</template>
