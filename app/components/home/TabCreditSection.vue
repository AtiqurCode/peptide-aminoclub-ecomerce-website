<script setup lang="ts">
import { tabRows } from '~/data/catalog'
</script>

<template>
  <section class="bg-ink text-white">
    <div class="mx-auto grid max-w-(--ui-container) grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-18">
      <div>
        <p class="font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase">
          Amino tab
        </p>
        <h2 class="mt-3.5 text-[30px] leading-[1.08] font-semibold tracking-tight sm:text-[36px] lg:text-[42px]">
          Run a <span class="font-serif font-normal italic">tab</span>.
        </h2>
        <p class="mt-3.5 max-w-[430px] text-[15px] leading-relaxed text-white/66 sm:text-[16px]">
          Members bill up to $4,000 across the month and settle it in one payment on the first. No interest, no fees, nothing hidden — the order ships right away.
        </p>
        <div class="mt-6.5 flex flex-wrap gap-3">
          <UButton
            to="/membership"
            size="lg"
            color="neutral"
            class="!bg-white !text-ink"
          >
            Become a member
          </UButton>
          <UButton
            to="/contact"
            size="lg"
            color="neutral"
            variant="outline"
            class="!border-white/22 !text-white"
          >
            How it works
          </UButton>
        </div>
      </div>

      <div class="w-full max-w-[360px] rotate-[1.4deg] rounded-md bg-[#FBFAF6] p-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.4)] lg:ml-auto">
        <div class="flex justify-between font-mono text-[10px] tracking-[0.16em] text-label uppercase">
          <span>Amino tab</span>
          <span>Aug 2026</span>
        </div>
        <div class="mt-4 flex flex-col gap-2.5 font-mono text-[12px]">
          <div
            v-for="row in tabRows"
            :key="row.d"
            class="flex justify-between border-b border-dashed border-line-2 pb-2"
          >
            <span class="text-body">{{ row.d }}</span>
            <span>{{ row.v }}</span>
          </div>
        </div>
        <div class="mt-3.5 flex items-baseline justify-between">
          <span class="text-[12px] font-semibold">Due Sep 1</span>
          <span class="text-[22px] font-semibold tracking-tight">$1,284.60</span>
        </div>
      </div>
    </div>
  </section>
</template>
