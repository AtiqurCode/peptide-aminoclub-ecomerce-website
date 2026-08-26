<script setup lang="ts">
import { marqueeItems } from '~/data/catalog'

const items = Array.from({ length: 24 }, (_, i) => marqueeItems[i % marqueeItems.length])
</script>

<template>
  <section class="overflow-hidden border-y border-hairline bg-[#FBFAF6] py-3.5">
    <div class="animate-ticker flex w-max gap-11 font-mono text-[10.5px] tracking-[0.28em] whitespace-nowrap text-[#A9B0AB] uppercase">
      <span
        v-for="(item, i) in items"
        :key="i"
      >{{ item }}</span>
    </div>
  </section>
</template>
