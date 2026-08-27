<script setup lang="ts">
import { referrals } from '~/data/catalog'
</script>

<template>
  <section class="mx-auto max-w-[77.5rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-19">
    <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <SectionEyebrow>Referrals</SectionEyebrow>
        <h2 class="mt-3.5 text-[28px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          Good research <span class="font-serif font-normal italic">travels by link</span>
        </h2>
        <p class="mt-3.5 max-w-[420px] text-[15px] leading-relaxed text-body sm:text-[16px]">
          Share your link with another lab. They get 10% off their first order, you get 10% back as points once it ships.
        </p>
        <UButton
          to="/account"
          size="xl"
          class="mt-6.5"
        >
          Get your link
        </UButton>
      </div>

      <div class="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
        <div class="rounded-[22px] border border-line bg-white p-5.5 shadow-[0_18px_50px_rgba(14,22,33,0.09)]">
          <p class="font-mono text-[10px] tracking-[0.2em] text-label uppercase">
            Your referral link
          </p>
          <div class="mt-3 flex items-center gap-2.5 rounded-xl bg-surface px-3.5 py-3">
            <span class="flex-1 font-mono text-[12px] text-[#3B4741]">aminoclub.com/r/lab-8842</span>
            <span class="rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">Copy</span>
          </div>
          <div class="mt-3.5 flex flex-col gap-2">
            <div
              v-for="r in referrals"
              :key="r.n"
              class="flex items-center gap-2.5 rounded-xl bg-surface px-3 py-2.5"
            >
              <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-200 text-[10px] font-bold text-ink-green">{{ r.i }}</span>
              <span class="flex-1 text-[13px]">{{ r.n }}</span>
              <span class="font-mono text-[11px] text-green-600">{{ r.v }}</span>
            </div>
          </div>
        </div>
        <div class="absolute -right-3 -bottom-4 rounded-full bg-tint-sky px-4 py-2.5 text-[12px] font-semibold shadow-[0_10px_24px_rgba(14,22,33,0.12)]">
          +10% back
        </div>
      </div>
    </div>
  </section>
</template>
