<script setup lang="ts">
useSeoMeta({
  title: 'Bulk orders — Amino Club',
  description: 'Volume pricing on research peptides. Larger runs ship from a single batch so your data stays comparable across the study.'
})

const { bulkId, bulkQty, bulkProduct, quote } = useBulkPricing()
</script>

<template>
  <div class="mx-auto max-w-(--ui-container) px-4 py-9 sm:px-6 lg:px-8 lg:pb-24">
    <SectionEyebrow>Bulk orders</SectionEyebrow>
    <h1 class="mt-2.5 text-[32px] font-semibold tracking-tight text-ink sm:text-[38px] lg:text-[42px]">
      Volume pricing, <span class="font-serif font-normal italic">one lot</span>
    </h1>
    <p class="mt-2.5 max-w-[560px] text-[15px] leading-relaxed text-body sm:text-[16px]">
      Larger runs ship from a single batch so your data stays comparable across the study. Discount applies to the whole order.
    </p>

    <div class="mt-7.5 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_380px]">
      <div>
        <BulkCompoundGrid v-model="bulkId" />
        <BulkTierGrid v-model="bulkQty" />
        <BulkPriceTable
          :product="bulkProduct"
          :active-qty="bulkQty"
        />
      </div>

      <aside class="lg:sticky lg:top-[86px]">
        <BulkSummary
          :product="bulkProduct"
          :qty="bulkQty"
          :quote="quote"
        />
      </aside>
    </div>
  </div>
</template>
