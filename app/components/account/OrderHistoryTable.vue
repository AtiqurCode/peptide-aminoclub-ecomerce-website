<script setup lang="ts">
import { orderData } from '~/data/catalog'
</script>

<template>
  <div class="overflow-hidden rounded-3xl border border-line">
    <div class="hidden grid-cols-[130px_1fr_130px_110px_110px] bg-surface px-5 py-3.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase sm:grid">
      <span>Order</span><span>Items</span><span>Status</span><span>Points</span><span>Total</span>
    </div>

    <div
      v-for="o in orderData"
      :key="o.id"
      class="border-t border-line-soft first:border-t-0 sm:first:border-t"
    >
      <div class="hidden grid-cols-[130px_1fr_130px_110px_110px] items-center px-5 py-4 sm:grid">
        <span class="font-mono text-[12px]">{{ o.id }}</span>
        <span class="text-[13.5px]">{{ o.items }}</span>
        <span
          class="w-fit justify-self-start rounded-full px-2.5 py-1 text-[11px] font-semibold"
          :class="o.status === 'Delivered' ? 'bg-green-200 text-ink-green' : 'bg-tint-sky text-[#1B3A5C]'"
        >{{ o.status }}</span>
        <span class="text-[13px] text-green-600">+{{ o.pts }}</span>
        <span class="text-[14px] font-semibold">{{ o.total }}</span>
      </div>

      <div class="flex flex-col gap-1.5 p-4 sm:hidden">
        <div class="flex items-center justify-between">
          <span class="font-mono text-[12px]">{{ o.id }}</span>
          <span
            class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            :class="o.status === 'Delivered' ? 'bg-green-200 text-ink-green' : 'bg-tint-sky text-[#1B3A5C]'"
          >{{ o.status }}</span>
        </div>
        <p class="text-[13.5px]">
          {{ o.items }}
        </p>
        <div class="flex items-center justify-between">
          <span class="text-[13px] text-green-600">+{{ o.pts }} pts</span>
          <span class="text-[14px] font-semibold">{{ o.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
