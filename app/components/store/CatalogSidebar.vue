<script setup lang="ts">
import { categoryNames, catalog, matchesCategory } from '~/data/catalog'

const category = defineModel<string>({ required: true })

const counts = computed(() => Object.fromEntries(
  categoryNames.map(c => [c, catalog.filter(p => matchesCategory(p, c)).length])
))
</script>

<template>
  <div class="flex flex-col gap-5.5">
    <div>
      <p class="mb-2.5 font-mono text-[10px] tracking-[0.2em] text-label uppercase">
        Category
      </p>
      <div class="flex flex-col gap-1">
        <button
          v-for="c in categoryNames"
          :key="c"
          type="button"
          class="flex items-center justify-between rounded-[11px] px-3 py-2.5 text-[13.5px] font-medium transition-colors"
          :class="category === c ? 'bg-ink text-white' : 'text-[#3B4741] hover:bg-surface'"
          @click="category = c"
        >
          {{ c }}
          <span class="font-mono text-[10.5px] opacity-55">{{ counts[c] }}</span>
        </button>
      </div>
    </div>

    <div class="rounded-2xl border border-ink-green/12 bg-tint-mint p-4">
      <p class="text-[13.5px] font-semibold text-ink-green">
        Build a box · 40% off
      </p>
      <p class="mt-1.5 text-[12.5px] leading-relaxed text-[#3E5348]">
        Pick any 4 compounds, ship monthly, swap anytime.
      </p>
      <UButton
        to="/box"
        size="sm"
        class="mt-3 !bg-ink-green"
      >
        Build yours
      </UButton>
    </div>

    <div class="rounded-2xl border border-line p-4">
      <p class="text-[13.5px] font-semibold">
        Every card shows its lot
      </p>
      <p class="mt-1.5 text-[12.5px] leading-relaxed text-body">
        Purity and certificate come from the batch you will actually receive.
      </p>
    </div>
  </div>
</template>
