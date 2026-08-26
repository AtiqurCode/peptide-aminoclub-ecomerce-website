<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { money } from '~/utils/pricing'
import { hideOnError } from '~/utils/image'

const props = defineProps<{ product: Product }>()

const { add } = useCart()
const { doseList, doseIndex, selected } = useDoseSelector(props.product)

function addToCart(event: Event) {
  event.stopPropagation()
  event.preventDefault()
  add(props.product.id, selected.value.mg, selected.value.price, 'once', 1)
}
</script>

<template>
  <div class="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-shadow duration-200 hover:shadow-[0_14px_32px_rgba(14,22,33,0.08)]">
    <NuxtLink
      :to="`/store/${product.id}`"
      class="relative flex aspect-[1.15] items-center justify-center"
      :style="{ background: `linear-gradient(155deg, ${product.tint} 0%, #ffffff 100%)` }"
    >
      <span class="absolute top-3 left-3.5 font-mono text-[9px] tracking-[0.16em] text-ink/42">{{ product.lot }}</span>
      <span
        v-if="product.kind === 'Spray'"
        class="absolute top-2.5 right-3 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase"
      >Spray</span>
      <img
        :src="product.img"
        :alt="product.name"
        class="block h-[82%] w-[72%] object-contain drop-shadow-[0_12px_22px_rgba(14,22,33,0.14)] transition-transform duration-300 group-hover:scale-[1.04]"
        loading="lazy"
        @error="hideOnError"
      >
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-2.5 p-3.5 pt-3">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 font-mono text-[10px] text-green-600">
          <span class="size-1.5 rounded-full bg-green-500" />{{ product.purity }}%
        </span>
        <NuxtLink
          :to="`/store/${product.id}`"
          class="font-mono text-[10px] text-label underline decoration-dotted"
        >
          CoA
        </NuxtLink>
      </div>
      <NuxtLink
        :to="`/store/${product.id}`"
        class="transition-colors hover:text-ink-green"
      >
        <p class="text-[14.5px] font-semibold tracking-tight">
          {{ product.name }}
        </p>
        <p class="mt-0.5 text-[12px] text-label">
          {{ product.sub }}
        </p>
      </NuxtLink>
      <DoseChips
        v-model="doseIndex"
        :doses="doseList"
      />
      <div class="mt-auto flex items-end justify-between gap-2">
        <div>
          <p class="text-[11.5px] text-[#A3ABA6] line-through">
            {{ money(selected.was) }}
          </p>
          <p class="mt-0.5 text-[17px] font-semibold tracking-tight">
            {{ money(selected.price) }}
          </p>
        </div>
        <UButton
          size="sm"
          @click="addToCart"
        >
          + Add
        </UButton>
      </div>
    </div>
  </div>
</template>
