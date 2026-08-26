<script setup lang="ts">
import { catalog } from '~/data/catalog'
import { doses, money } from '~/utils/pricing'

const bulkId = defineModel<string>({ required: true })
const picks = catalog.slice(0, 9).map(p => ({ ...p, unitPrice: money(doses(p)[1].price) }))
</script>

<template>
  <div>
    <p class="mb-2.5 font-mono text-[10px] tracking-[0.2em] text-label uppercase">
      1 — Choose compound
    </p>
    <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="p in picks"
        :key="p.id"
        type="button"
        class="rounded-2xl p-3.5 text-left transition-colors"
        :class="bulkId === p.id ? 'border-[1.5px] border-ink bg-surface' : 'border border-line hover:border-ink/30'"
        @click="bulkId = p.id"
      >
        <span class="block text-[13.5px] font-semibold">{{ p.name }}</span>
        <span class="mt-0.5 block font-mono text-[10px] text-label">{{ p.purity }}% · {{ p.unitPrice }} / 10mg</span>
      </button>
    </div>
  </div>
</template>
