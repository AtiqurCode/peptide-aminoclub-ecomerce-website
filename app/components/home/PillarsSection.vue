<script setup lang="ts">
const pillars = [
  { eyebrow: '01 — Purity', title: '99%+ guaranteed', d: 'Reverse-phase HPLC against a certified reference standard on every batch we release.', bg: '#E9FCE6', eyebrowColor: '#17382A', textColor: '#4C5B52' },
  { eyebrow: '02 — Delivery', title: 'Shipment protection', d: 'Lost, damaged, or stolen in transit — we reship at no cost, on every order, no claim forms.', bg: '#DDEBFA', eyebrowColor: '#1B3A5C', textColor: '#3E5670' },
  { eyebrow: '03 — Documentation', title: 'CoA with every batch', d: 'Scan the vial, land on its exact certificate. Archived lots stay published for reference.', bg: '#FEFECA', eyebrowColor: '#5E5518', textColor: '#57511F' }
]
</script>

<template>
  <section class="mx-auto max-w-[77.5rem] px-4 pt-14 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div
        v-for="p in pillars"
        :key="p.eyebrow"
        class="rounded-[20px] p-6"
        :style="{ background: p.bg }"
      >
        <p
          class="font-mono text-[10px] tracking-[0.2em] uppercase"
          :style="{ color: p.eyebrowColor }"
        >
          {{ p.eyebrow }}
        </p>
        <p class="mt-3 text-[19px] font-semibold tracking-tight">
          {{ p.title }}
        </p>
        <p
          class="mt-2 text-[13.5px] leading-relaxed"
          :style="{ color: p.textColor }"
        >
          {{ p.d }}
        </p>
      </div>
    </div>
  </section>
</template>
