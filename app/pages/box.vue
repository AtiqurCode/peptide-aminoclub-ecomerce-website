<script setup lang="ts">
import { categoryNames, catalog, matchesCategory } from '~/data/catalog'

useSeoMeta({
  title: 'Build your box — Amino Club',
  description: 'Pick any 4 research compounds and we pack them into one monthly box with free 2-day delivery, 40% off every month you stay subscribed.'
})

const category = ref('All')

const filtered = computed(() => catalog.filter(p => matchesCategory(p, category.value)))

const statCards = [
  { bg: '#E9FCE6', big: '40%', bigColor: '#17382A', line: 'off every month you stay subscribed', lineColor: '#3E5348', serif: true },
  { bg: '#FCE7EC', title: 'Amino H₂O free', line: 'included in every box, every month', lineColor: '#6B5158' },
  { bg: '#DDEBFA', title: 'CoA on every batch', line: 'documentation travels with each vial', lineColor: '#3E5670' },
  { bg: '#FEFECA', title: 'Skip or pause', line: 'manage the box from your account', lineColor: '#57511F' }
]
</script>

<template>
  <div class="mx-auto max-w-[77.5rem] px-4 py-9 sm:px-6 lg:px-8 lg:pb-24">
    <SectionEyebrow>Subscription box</SectionEyebrow>
    <h1 class="mt-2.5 text-[32px] font-semibold tracking-tight text-ink sm:text-[38px] lg:text-[42px]">
      Build your <span class="font-serif font-normal italic">box</span>
    </h1>
    <p class="mt-2.5 max-w-[560px] text-[15px] leading-relaxed text-body sm:text-[16px]">
      Pick any 4 research compounds and we pack them into one monthly box with free 2-day delivery. Swap anything after your first box ships.
    </p>

    <div class="mt-6.5 grid grid-cols-2 gap-3 lg:grid-cols-4">
      <div
        v-for="s in statCards"
        :key="s.title || s.big"
        class="rounded-2xl p-4"
        :style="{ background: s.bg }"
      >
        <p
          v-if="s.big"
          class="font-serif text-[30px] leading-none"
          :style="{ color: s.bigColor }"
        >
          {{ s.big }}
        </p>
        <p
          v-else
          class="text-[13.5px] font-semibold"
        >
          {{ s.title }}
        </p>
        <p
          class="mt-1.5 text-[12.5px]"
          :style="{ color: s.lineColor }"
        >
          {{ s.line }}
        </p>
      </div>
    </div>

    <div class="mt-7.5 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_340px]">
      <div>
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="c in categoryNames"
            :key="c"
            type="button"
            class="rounded-full px-3.5 py-2 text-[12.5px] font-medium transition-colors"
            :class="category === c ? 'bg-ink text-white' : 'border border-line-2 text-[#3B4741] hover:border-ink/40'"
            @click="category = c"
          >
            {{ c }}
          </button>
        </div>
        <div class="mt-4.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          <BoxProductCard
            v-for="p in filtered"
            :key="p.id"
            :product="p"
          />
        </div>
      </div>

      <aside class="lg:sticky lg:top-[86px]">
        <BoxSummary />
      </aside>
    </div>
  </div>
</template>
