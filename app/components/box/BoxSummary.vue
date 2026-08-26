<script setup lang="ts">
import { money } from '~/utils/pricing'

const { items, slots, retail, total, isFull, ctaLabel, removeAt } = useBox()

function checkout() {
  if (isFull.value) navigateTo('/cart')
}
</script>

<template>
  <div class="rounded-[22px] border border-line p-5 shadow-[0_14px_40px_rgba(14,22,33,0.06)]">
    <div class="flex items-center justify-between">
      <p class="text-[15px] font-semibold">
        Your box
      </p>
      <span class="font-mono text-[10.5px] text-label">{{ items.length }} of 4 picked</span>
    </div>
    <div class="mt-3.5 flex flex-col gap-2">
      <div
        v-for="slot in slots"
        :key="slot.index"
        class="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
        :class="slot.filled ? 'bg-surface' : 'border border-dashed border-line-2 text-[#A3ABA6]'"
      >
        <span class="font-mono text-[11px] text-[#A3ABA6]">0{{ slot.index + 1 }}</span>
        <span class="flex-1 text-[13px] font-medium">{{ slot.label }}</span>
        <button
          v-if="slot.filled"
          type="button"
          class="text-[14px] text-[#A3ABA6]"
          @click="removeAt(slot.index)"
        >
          <UIcon
            name="i-lucide-x"
            class="size-3.5"
          />
        </button>
      </div>
      <div class="flex items-center gap-2.5 rounded-xl bg-tint-blush px-3 py-2.5">
        <span class="flex-1 text-[13px] font-medium">Amino H₂O</span>
        <span class="text-[10.5px] font-bold tracking-wide text-green-600 uppercase">Free</span>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-1.5 border-t border-line-soft pt-3.5 text-[13px]">
      <div class="flex justify-between text-body">
        <span>Retail</span>
        <span class="line-through">{{ money(retail) }}</span>
      </div>
      <div class="flex justify-between text-green-600">
        <span>Subscriber discount</span>
        <span>−40%</span>
      </div>
      <div class="mt-1 flex items-baseline justify-between">
        <span class="font-semibold">Monthly total</span>
        <span class="text-[22px] font-semibold tracking-tight">{{ money(total) }}</span>
      </div>
    </div>
    <UButton
      block
      size="xl"
      class="mt-3.5"
      :class="!isFull && '!bg-surface-2 !text-label'"
      :disabled="!isFull"
      @click="checkout"
    >
      {{ ctaLabel }}
    </UButton>
    <p class="mt-2.5 text-[11.5px] leading-relaxed text-label">
      Free 2-day delivery every month. Cancel or swap from your account, no penalty.
    </p>
  </div>
</template>
