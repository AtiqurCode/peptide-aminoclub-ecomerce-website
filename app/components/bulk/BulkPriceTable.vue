<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { bulkTierTable } from '~/data/catalog'
import { bulkQuote, money } from '~/utils/pricing'

const props = defineProps<{ product: Product, activeQty: number }>()

const rows = computed(() => bulkTierTable.map((t) => {
  const q = bulkQuote(props.product, t.qty)
  return { qty: t.qty, unit: money(q.unitPrice), total: money(q.total), saved: money(q.saved) }
}))
</script>

<template>
  <div class="mt-6.5 overflow-hidden rounded-[18px] border border-line">
    <div class="grid grid-cols-4 gap-2 bg-surface px-4.5 py-3 font-mono text-[9.5px] tracking-[0.14em] text-label uppercase sm:gap-0">
      <span>Tier</span><span>Unit price</span><span>Total</span><span>Save</span>
    </div>
    <div
      v-for="r in rows"
      :key="r.qty"
      class="grid grid-cols-4 items-center gap-2 border-t border-line-soft px-4.5 py-3.5 sm:gap-0"
      :class="activeQty === r.qty && 'bg-green-50'"
    >
      <span class="text-[13px] font-semibold sm:text-[13.5px]">{{ r.qty }} units</span>
      <span class="text-[12.5px] sm:text-[13.5px]">{{ r.unit }}</span>
      <span class="text-[12.5px] font-semibold sm:text-[13.5px]">{{ r.total }}</span>
      <span class="text-[12.5px] text-green-600 sm:text-[13.5px]">{{ r.saved }}</span>
    </div>
  </div>
</template>
