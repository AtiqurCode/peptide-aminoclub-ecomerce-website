<script setup lang="ts">
import type { Product } from '~/data/catalog'
import type { BulkQuote } from '~/utils/pricing'
import { money } from '~/utils/pricing'

const props = defineProps<{ product: Product, qty: number, quote: BulkQuote }>()

const { add } = useCart()

function addBulk() {
  add(props.product.id, 10, props.quote.unitPrice, 'bulk', props.qty)
}
</script>

<template>
  <div class="rounded-[22px] border border-line p-5.5 shadow-[0_14px_40px_rgba(14,22,33,0.06)]">
    <p class="font-mono text-[10px] tracking-[0.2em] text-label uppercase">
      Order summary
    </p>
    <p class="mt-3 text-[19px] font-semibold tracking-tight">
      {{ product.name }} · 10mg
    </p>
    <p class="mt-1 font-mono text-[11px] text-label">
      Single lot · {{ product.purity }}% purity
    </p>
    <div class="mt-4 flex flex-col gap-2 text-[13.5px]">
      <div class="flex justify-between text-body">
        <span>{{ qty }} × unit retail</span>
        <span class="line-through">{{ money(quote.total + quote.saved) }}</span>
      </div>
      <div class="flex justify-between text-green-600">
        <span>Bulk discount</span>
        <span>−{{ quote.off }}%</span>
      </div>
      <div class="flex justify-between text-body">
        <span>Signed 2-day delivery</span>
        <span>Free</span>
      </div>
      <div class="flex items-baseline justify-between border-t border-line-soft pt-2.5">
        <span class="font-semibold">Total</span>
        <span class="text-[24px] font-semibold tracking-tight">{{ money(quote.total) }}</span>
      </div>
    </div>
    <UButton
      block
      size="xl"
      class="mt-4"
      @click="addBulk"
    >
      Add bulk order to cart
    </UButton>
    <p class="mt-2.5 text-[11.5px] leading-relaxed text-label">
      Need more than 50 units or a custom fill? Support can quote a dedicated batch.
    </p>
  </div>
</template>
