<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { hideOnError } from '~/utils/image'

const props = defineProps<{ product: Product }>()

const thumbLabels = ['Vial', 'Label', 'CoA', 'Packaging']
</script>

<template>
  <div class="lg:sticky lg:top-[86px]">
    <div
      class="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl sm:aspect-[1.08]"
      :style="{ background: `linear-gradient(150deg, ${props.product.tint} 0%, #ffffff 100%)` }"
    >
      <span class="absolute top-4.5 left-5 font-mono text-[10px] tracking-[0.18em] text-ink/45">
        {{ props.product.lot }} · {{ props.product.date }}
      </span>
      <img
        :src="props.product.img"
        :alt="props.product.name"
        class="h-[68%] w-[60%] object-contain drop-shadow-[0_20px_36px_rgba(14,22,33,0.16)]"
        @error="hideOnError"
      >
      <span class="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_8px_20px_rgba(14,22,33,0.1)]">
        <span class="size-1.75 rounded-full bg-green-500" />
        <span class="text-[12px] font-semibold">{{ props.product.purity }}% purity</span>
        <span class="font-mono text-[10px] text-label">HPLC</span>
      </span>
    </div>
    <div class="mt-3.5 grid grid-cols-4 gap-2.5">
      <div
        v-for="label in thumbLabels"
        :key="label"
        class="relative flex aspect-square items-end overflow-hidden rounded-2xl border border-hairline p-2.5"
        :style="{ background: `linear-gradient(150deg, ${props.product.tint}, #fff)` }"
      >
        <img
          :src="props.product.img"
          :alt="label"
          class="absolute inset-0 m-auto h-[60%] w-[60%] object-contain opacity-90"
          @error="hideOnError"
        >
        <span class="relative font-mono text-[9px] tracking-[0.12em] text-ink/50">{{ label }}</span>
      </div>
    </div>
  </div>
</template>
