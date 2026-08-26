<script setup lang="ts">
import { bulkTierTable } from '~/data/catalog'

const qty = defineModel<number>({ required: true })
</script>

<template>
  <div>
    <p class="mt-6.5 mb-2.5 font-mono text-[10px] tracking-[0.2em] text-label uppercase">
      2 — Choose quantity
    </p>
    <div class="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
      <button
        v-for="t in bulkTierTable"
        :key="t.qty"
        type="button"
        class="rounded-2xl p-4 text-center transition-colors"
        :class="qty === t.qty ? 'border-[1.5px] border-ink bg-green-50' : 'border border-line-2 hover:border-ink/40'"
        @click="qty = t.qty"
      >
        <span class="block text-[22px] font-semibold tracking-tight">{{ t.qty }}</span>
        <span class="mt-0.5 block text-[12px] text-body">units</span>
        <span class="mt-2.5 inline-block rounded-full bg-green-200 px-2.5 py-1 text-[10.5px] font-bold text-ink-green">−{{ t.off }}%</span>
      </button>
    </div>
  </div>
</template>
