<script setup lang="ts">
import { catalog } from '~/data/catalog'

useSeoMeta({
  title: 'Certificates of analysis — Amino Club',
  description: '103 public certificates across 50 compounds. Eight assays per batch, run by an independent ISO 17025 accredited lab.'
})

const q = ref('')

const filtered = computed(() => catalog.filter(p =>
  q.value === '' || `${p.name} ${p.lot}`.toLowerCase().includes(q.value.toLowerCase())
))

const statTiles = [
  { v: '103', label: 'Published certificates', bg: '#E9FCE6', color: '#3E5348' },
  { v: '50', label: 'Compounds covered', bg: '#DDEBFA', color: '#3E5670' },
  { v: '99%+', label: 'Purity, every batch', bg: '#FEFECA', color: '#57511F' },
  { v: 'ISO 17025', label: 'Accredited testing', bg: '#E9E7FB', color: '#413A6B' }
]
</script>

<template>
  <div>
    <section class="bg-[linear-gradient(150deg,#E9EFFB,#E9FCE6)] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div class="mx-auto max-w-[900px] text-center">
        <h1 class="text-[30px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[38px] lg:text-[44px]">
          The lab report behind <span class="font-serif font-normal italic">every vial</span>
        </h1>
        <p class="mt-3 text-[15px] leading-relaxed text-[#3E5348] sm:text-[16px]">
          103 public certificates across 50 compounds. Eight assays per batch, run by an independent ISO 17025 accredited lab.
        </p>
        <UInput
          v-model="q"
          icon="i-lucide-search"
          placeholder="Search by compound or lot number"
          size="xl"
          class="mx-auto mt-5.5 w-full max-w-[460px]"
        />
      </div>
    </section>

    <section class="mx-auto max-w-[77.5rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div
          v-for="t in statTiles"
          :key="t.label"
          class="rounded-2xl p-4.5 text-center"
          :style="{ background: t.bg }"
        >
          <p class="text-[24px] font-semibold tracking-tight sm:text-[26px]">
            {{ t.v }}
          </p>
          <p
            class="mt-1 text-[12px]"
            :style="{ color: t.color }"
          >
            {{ t.label }}
          </p>
        </div>
      </div>

      <p class="mt-8 mb-3.5 text-[13px] text-label">
        {{ filtered.length }} certificates · tap a card to shop that lot
      </p>
      <div
        v-if="filtered.length"
        class="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <CertificateCard
          v-for="p in filtered"
          :key="p.id"
          :product="p"
        />
      </div>
      <div
        v-else
        class="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line py-20 text-center"
      >
        <UIcon
          name="i-lucide-search-x"
          class="size-8 text-label"
        />
        <p class="text-[15px] font-semibold">
          No certificates match "{{ q }}"
        </p>
        <p class="max-w-[320px] text-[13px] text-body">
          Try a compound name or the lot number printed on your label.
        </p>
        <UButton
          color="neutral"
          variant="outline"
          size="sm"
          @click="q = ''"
        >
          Clear search
        </UButton>
      </div>
    </section>
  </div>
</template>
