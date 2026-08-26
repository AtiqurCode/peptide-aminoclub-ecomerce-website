<script setup lang="ts">
import { boxPerks, catalog } from '~/data/catalog'

const preview = catalog.slice(0, 4)
</script>

<template>
  <section class="mx-auto max-w-(--ui-container) px-4 py-14 sm:px-6 lg:px-8 lg:py-19">
    <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-green-200 px-3 py-1.5 text-[11.5px] font-semibold text-ink-green">
          New
          <span class="size-1 rounded-full bg-ink/30" />
          Subscription box
        </span>
        <h2 class="mt-4 text-[28px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          Pick any 4. <span class="font-serif font-normal italic">Save 40%</span> every month.
        </h2>
        <p class="mt-3.5 max-w-[440px] text-[15px] leading-relaxed text-body sm:text-[16px]">
          Build a box from any compound in the catalog. We pack and ship it monthly at 40% off retail for as long as you subscribe.
        </p>
        <ul class="mt-5.5 flex flex-col gap-2.5">
          <li
            v-for="perk in boxPerks"
            :key="perk"
            class="flex items-center gap-2.5 text-[14.5px] text-[#2A3630]"
          >
            <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-ink-green">
              <UIcon
                name="i-lucide-check"
                class="size-3"
              />
            </span>
            {{ perk }}
          </li>
        </ul>
        <UButton
          to="/box"
          size="xl"
          class="mt-7"
        >
          Build your box
        </UButton>
      </div>

      <div class="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
        <div class="absolute -top-5 -right-3.5 z-10 flex size-[78px] rotate-6 flex-col items-center justify-center rounded-full bg-tint-butter shadow-[0_10px_24px_rgba(14,22,33,0.12)]">
          <span class="font-serif text-2xl leading-none">40%</span>
          <span class="text-[9.5px] font-bold tracking-[0.1em] uppercase">off</span>
        </div>
        <div class="rounded-3xl border border-hairline bg-white p-6 shadow-[0_16px_50px_rgba(14,22,33,0.1)]">
          <div class="flex items-center justify-between pr-14">
            <p class="text-[15px] font-semibold">
              Your box
            </p>
            <span class="rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase">
              4 items + 1 free
            </span>
          </div>
          <div class="mt-4 flex flex-col gap-2">
            <div
              v-for="p in preview"
              :key="p.id"
              class="flex items-center gap-3 rounded-2xl bg-surface p-2.5"
            >
              <span
                class="size-[30px] shrink-0 rounded-[9px]"
                :style="{ background: `linear-gradient(155deg, ${p.tint}, #fff)` }"
              />
              <span class="flex-1 text-[13.5px] font-medium">{{ p.name }}</span>
              <span class="font-mono text-[11px] text-label">10mg</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl bg-tint-blush p-2.5">
              <span class="size-[30px] shrink-0 rounded-[9px] bg-white" />
              <span class="flex-1 text-[13.5px] font-medium">Amino H₂O <span class="font-normal text-body">included</span></span>
              <span class="text-[11px] font-bold tracking-wide text-green-600 uppercase">Free</span>
            </div>
          </div>
          <div class="mt-4 flex items-baseline justify-between border-t border-line-soft pt-4">
            <span class="text-[13px] text-body">Monthly · cancel anytime</span>
            <span class="flex items-baseline gap-2">
              <span class="text-[13px] text-[#A3ABA6] line-through">$229.96</span>
              <span class="text-[24px] font-semibold tracking-tight">$137.98</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
