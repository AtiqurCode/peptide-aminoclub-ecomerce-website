<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { doses, money } from '~/utils/pricing'

const props = defineProps<{ product: Product }>()

const fromPrice = money(doses(props.product)[0].price)
</script>

<template>
  <div class="flex flex-col gap-3 rounded-[18px] border border-line p-4 transition-shadow duration-200 hover:shadow-[0_14px_32px_rgba(14,22,33,0.08)]">
    <div class="flex items-start gap-3">
      <span
        class="flex size-13 shrink-0 items-center justify-center rounded-[11px] text-center font-serif text-lg text-ink/70 italic"
        :style="{ background: `linear-gradient(155deg, ${product.tint}, #fff)` }"
      >{{ product.abbr.slice(0, 2) }}</span>
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <p class="text-[13.5px] font-semibold">
            {{ product.name }}
          </p>
          <span class="inline-flex items-center gap-1 font-mono text-[9.5px] text-green-600">
            <span class="size-1.25 rounded-full bg-green-500" />ISO 17025
          </span>
        </div>
        <p class="mt-1.5 text-[22px] font-semibold tracking-tight text-ink-green">
          {{ product.purity }}%
        </p>
        <p class="mt-0.5 font-mono text-[10px] text-label">
          {{ product.lot }} · {{ product.date }}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-1.5 rounded-[10px] bg-[#F3F9F1] px-2.5 py-2 text-[11.5px] text-green-600">
      <UIcon
        name="i-lucide-check"
        class="size-3.5"
      />
      All 8 assays passed
    </div>
    <div class="flex gap-2">
      <UButton
        :to="`/store/${product.id}`"
        size="sm"
        class="flex-1 justify-center"
      >
        View product · from {{ fromPrice }}
      </UButton>
      <UButton
        :to="`/store/${product.id}`"
        size="sm"
        color="neutral"
        variant="outline"
      >
        CoA ↓
      </UButton>
    </div>
  </div>
</template>
