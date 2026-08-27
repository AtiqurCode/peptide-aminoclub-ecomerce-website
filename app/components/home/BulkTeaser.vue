<script setup lang="ts">
import { bulkTierTable, catalog } from '~/data/catalog'
import { money } from '~/utils/pricing'

const { bulkQty, bulkProduct, quote } = useBulkPricing()

const scatterPositions: [number, number, number, number][] = [
  [4, 14, 54, -18], [13, 58, 44, 12], [22, 26, 62, 8], [31, 72, 40, -14],
  [40, 10, 50, 20], [49, 64, 46, -9], [58, 30, 58, 15], [67, 76, 42, -20],
  [76, 18, 52, 10], [85, 58, 48, -12], [93, 34, 44, 18], [8, 84, 38, 7],
  [45, 86, 42, -16], [71, 6, 40, 22], [27, 4, 36, -11], [62, 88, 38, 13]
]
const scatter = scatterPositions.map(([left, top, width, rotate], i) => ({
  img: catalog[(i * 3) % catalog.length]!.img,
  left,
  top,
  width,
  rotate
}))
</script>

<template>
  <section class="relative overflow-hidden bg-[linear-gradient(180deg,#F4F8F6,#E6EEEA)]">
    <span
      v-for="(s, i) in scatter"
      :key="i"
      class="pointer-events-none absolute hidden opacity-35 drop-shadow-[0_10px_18px_rgba(14,22,33,0.12)] lg:block"
      :style="{
        left: s.left + '%',
        top: s.top + '%',
        width: s.width + 'px',
        height: Math.round(s.width * 1.5) + 'px',
        transform: `rotate(${s.rotate}deg)`,
        backgroundImage: `url(${s.img})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }"
    />

    <div class="relative mx-auto grid max-w-[77.5rem] grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-23">
      <div class="order-1 lg:order-2">
        <span class="inline-flex items-center gap-2 rounded-full bg-tint-butter px-3 py-1.5 text-[11.5px] font-semibold text-[#5E5518]">
          New
          <span class="size-1 rounded-full bg-ink/30" />
          Bulk orders
        </span>
        <h2 class="mt-4 text-[28px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          Stocking up? <span class="font-serif font-normal italic">Up to 50% off</span> in bulk.
        </h2>
        <p class="mt-3.5 max-w-[430px] text-[15px] leading-relaxed text-body sm:text-[16px]">
          Ten units of any compound unlocks 25% off. Fifty unlocks half off the whole order — same certificate, one shipment, free signed delivery.
        </p>
        <UButton
          to="/bulk"
          size="xl"
          class="mt-6.5"
        >
          Order in bulk
        </UButton>
      </div>

      <div class="order-2 rounded-3xl border border-[#E4E9E7] bg-white p-6 shadow-[0_16px_46px_rgba(14,22,33,0.08)] lg:order-1">
        <div class="flex gap-2">
          <button
            v-for="t in bulkTierTable"
            :key="t.qty"
            type="button"
            class="flex flex-1 flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 transition-colors"
            :class="bulkQty === t.qty ? 'bg-ink text-white' : 'border border-line-2 text-[#3B4741] hover:border-ink/40'"
            @click="bulkQty = t.qty"
          >
            <span class="text-[13px] font-semibold">{{ t.qty }}</span>
            <span class="font-mono text-[10px] tracking-wide">−{{ t.off }}%</span>
          </button>
        </div>
        <div class="mt-4.5 flex items-center justify-between rounded-2xl bg-surface p-4.5">
          <div>
            <p class="text-[15px] font-semibold">
              {{ bulkProduct.name }} · 10mg
            </p>
            <p class="mt-1 font-mono text-[11px] text-label">
              {{ bulkQty }} units · free 2-day signed
            </p>
          </div>
          <div class="text-right">
            <p class="text-[13px] text-[#A3ABA6] line-through">
              {{ money(quote.total + quote.saved) }}
            </p>
            <p class="mt-0.5 text-[26px] font-semibold tracking-tight">
              {{ money(quote.total) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
