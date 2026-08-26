<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { money } from '~/utils/pricing'

const props = defineProps<{ product: Product }>()

const { addItem, isFull } = useBox()
const { doseList, doseIndex, selected } = useDoseSelector(props.product)

function add() {
  addItem(props.product.id, selected.value.mg)
}
</script>

<template>
  <div class="flex flex-col gap-2.5 rounded-[18px] border border-line p-3.5">
    <div class="flex gap-3">
      <span
        class="flex size-10 shrink-0 items-center justify-center rounded-[11px] text-center font-serif text-[11px] leading-none text-ink/70 italic"
        :style="{ background: `linear-gradient(155deg, ${product.tint}, #fff)` }"
      >{{ product.abbr.slice(0, 2) }}</span>
      <div>
        <p class="text-[13.5px] font-semibold">
          {{ product.name }}
        </p>
        <p class="mt-0.5 font-mono text-[10px] text-green-600">
          {{ product.purity }}% · CoA
        </p>
      </div>
    </div>
    <DoseChips
      v-model="doseIndex"
      :doses="doseList"
    />
    <div class="flex items-center justify-between">
      <p class="text-[15px] font-semibold">
        {{ money(selected.price) }}
      </p>
      <UButton
        size="sm"
        color="neutral"
        variant="outline"
        :disabled="isFull"
        @click="add"
      >
        + Add to box
      </UButton>
    </div>
  </div>
</template>
